import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';
import { createHash } from 'node:crypto';
//import * as fs from 'fs';
import fetch from 'node-fetch';

/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({request, platform }) => {
      const formdata = await request.formData();
      const url = formdata.get('url')?.toString()
      console.log(url);
      //fix this part
      
        const hash = createHash('sha256').update(url).digest('hex');
        console.log({hash});
        
        const html = await fetchUrl(url);
        const htmlWithoutStyles = stripStyles(html);
      
        const dom = new JSDOM(htmlWithoutStyles, { url });
        const reader = new Readability(dom.window.document);
        const article: ReadabilityResult = reader.parse();
      
        //const filePath = `${hash}.html`;
      
        const formattedHtml = createFormattedHtml(article);

        console.log('Reader view stored successfully.');
      
      

      return {
        success: true,
        html: formattedHtml
      }
  }
};

interface ReadabilityResult {
  title: string;
  content: string;
}

async function fetchUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
  }
  return await response.text();
}

function stripStyles(html: string): string {
  return html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
}

function createFormattedHtml(article: ReadabilityResult): string {
  const dom = new JSDOM('');
  const document = dom.window.document;

  const contentElement = document.createElement('div');
  contentElement.innerHTML = article.content;

  const imgElements = contentElement.querySelectorAll('img');

  imgElements.forEach((imgElement) => {
    const parent = imgElement.parentNode;
    if (parent && parent.nodeName.toLowerCase() === 'p') {
      parent.parentNode.insertBefore(imgElement, parent);
    }
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${article.title}</title>
        <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet'>
      </head>
      <body>
        <h1>${article.title}</h1>
        ${contentElement.innerHTML}
      </body>
      <style>
        body {
          padding: 0 28%;
          text-align: center;
          font-family: 'Lexend Deca', sans-serif;
          line-height: 1.6;
        }
      </style>
    </html>
  `;
}

  