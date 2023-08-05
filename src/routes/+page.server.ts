
/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({request, platform }) => {
      const data = await request.formData();
      const url = data.get('url')
      console.log(url);
      //fix this part
      return {
        success: true,
        html: url
      }
  }
};


  