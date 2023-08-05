// import { JSDOM } from 'jsdom';
// import { Readability } from '@mozilla/readability';
//import * as fs from 'fs';

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
        
        const response = await fetch(url);
        const html = await response.text();
        const htmlNoStyle = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        console.log(htmlNoStyle);
        // const htmlWithoutStyles = stripStyles(html);
      
        // const dom = new JSDOM(htmlWithoutStyles, { url });
        // const reader = new Readability(dom.window.document);
        // const article: ReadabilityResult = reader.parse();
      
        // //const filePath = `${hash}.html`;
      
        // const formattedHtml = createFormattedHtml(article);

        // console.log('Reader view stored successfully.');
      
      

      return {
        success: true,
        html: htmlNoStyle,
        hash: hashHex
      }
  }
};

// interface ReadabilityResult {
//   title: string;
//   content: string;
// }

// async function fetchUrl(url: string): Promise<string> {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
//   }
//   return await response.text();
// }

// function stripStyles(html: string): string {
//   return html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
// }

// function createFormattedHtml(article: ReadabilityResult): string {
//   const dom = new JSDOM('');
//   const document = dom.window.document;

//   const contentElement = document.createElement('div');
//   contentElement.innerHTML = article.content;

//   const imgElements = contentElement.querySelectorAll('img');

//   imgElements.forEach((imgElement) => {
//     const parent = imgElement.parentNode;
//     if (parent && parent.nodeName.toLowerCase() === 'p') {
//       parent.parentNode.insertBefore(imgElement, parent);
//     }
//   });

//   return `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <title>${article.title}</title>
//         <link href='https://fonts.googleapis.com/css?family=Lexend Deca' rel='stylesheet'>
//       </head>
//       <body>
//         <h1>${article.title}</h1>
//         ${contentElement.innerHTML}
//       </body>
//       <style>
//         body {
//           padding: 0 28%;
//           text-align: center;
//           font-family: 'Lexend Deca', sans-serif;
//           line-height: 1.6;
//         }
//       </style>
//     </html>
//   `;
// }

  