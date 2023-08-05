/** @type {import('./$types').Actions} */
export const actions = {
  verify: async ({ cookies, request, platform }) => {
      const data = await request.formData();
      console.log(data);
  }
};


  