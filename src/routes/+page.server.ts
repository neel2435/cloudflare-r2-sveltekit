/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({request, platform }) => {
      const data = await request.formData();
      console.log(JSON.stringify(data));
      //fix this part
  }
};


  