// /** @type {import('./$types').PageServerLoad} */
// //import { R2_BUCKET } from '$env/static/private';


// console.log("in page.server")

// export async function load({platform}) {
//   console.log("attempting html load");
//   let html = await getHTML(platform);
//   console.log("html stored successfully");
//   return html;
// }


//  async function getHTML(platform) {
//   console.log("in /+page.server.ts (getHTML)");
//   const html = await platform.env.R2_BUCKET.get('2fb31edca72c058c5e3d6453abf11fc8c97bc81873bc1a73700dfe7f152aabc8.html');
//   console.log("get html from R2");
//   console.log(html);
//   const obj = await html.text();
//   console.log(obj);

//   if (obj === null) {
//     return null;
//   }

//   console.log("html retrieved");
//   return obj;
// }




  