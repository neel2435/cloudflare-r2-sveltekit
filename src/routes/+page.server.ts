//import { JSDOM } from 'jsdom';
import {DOMParser} from "linkedom"
import { Readability } from '@mozilla/readability';
//import * as fs from 'fs';
/** @type {import('./$types').PageServerLoad} */
/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({request, platform }) => {
      const formdata = await request.formData();
      const url = formdata.get('url')?.toString()
      console.log(url);
      //fix this part
      
      const encodedJson = new TextEncoder().encode(url);


      console.log("create sha256 hash");
      const myDigest = await crypto.subtle.digest({ name: 'SHA-256' }, encodedJson);
      const hashArray = Array.from(new Uint8Array(myDigest));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      console.log(hashHex);
        
        //check R2
      const obj = await getObject(platform, hashHex)
      if (obj) {
        console.log('i after getobject');
        return {
          success: true,
          html: JSON.stringify(obj),
          hash: hashHex,
          title: obj?.title,
          content: obj?.content
        };
      }

      const response = await fetch(url);
      const html = await response.text();
      //const htmlNoStyle = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        
      const domParser = new DOMParser();
      const document = domParser.parseFromString(html, 'text/html');
       
      const reader = new Readability(document);
      const article = reader.parse();
      console.log(article?.title);
      
      await putObject(platform, hashHex, {title: article?.title, content: article?.content})

      return {
        success: true,
        html: JSON.stringify(article),
        hash: hashHex,
        title: article?.title,
        content: article?.content
      }
  }
};

async function getObject(platform, hash: string) {
  const jsonString = await platform.env.R2_BUCKET.get(hash);
  console.log("get thing from bucket");
  console.log(jsonString);

  if (jsonString === null) {
    return null;
  }

  console.log("html retrieved");
  return JSON.parse(jsonString);
}


async function putObject(platform, hash:string, article) {
  const articleJson = JSON.stringify(article);
  await platform.env.R2_BUCKET.put(hash, articleJson);
  console.log('put thing in bucket');
}