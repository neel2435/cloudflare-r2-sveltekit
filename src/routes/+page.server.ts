/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({request, platform }) => {
      const data = await request.formData();
      console.log(data.text());
      //fix this part
  }
};


  