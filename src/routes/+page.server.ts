/** @type {import('./$types').PageServerLoad} */

console.log("in page.server")

export async function load({platform}) {
  console.log("in /+page.server.ts (getHTML)");
  const obj = await platform.env.R2_BUCKET.get('2fb31edca72c058c5e3d6453abf11fc8c97bc81873bc1a73700dfe7f152aabc8.html');
  console.log("get html from R2");


  if (obj === null) {
    return null;
  }

  let html = await obj.text();
  console.log("html retrieved");
  return html;
}




  