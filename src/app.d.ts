// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				R2_BUCKET: "peacho-bucket";
				R2_ACCESS_KEY: "5872322597758bf928a73b8c7ec37694";
				R2_ACCOUNT_ID: "b0b1803d133ab70e6f0ea954c2a10b04";
				R2_SECRET_KEY: "282fd1ae73c17c0cf17da945d1e8db1a5466be5ed2fe3d5bf009142a9e3e1632";
			};
		}
	}
}

export {};
