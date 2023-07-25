<script>
  import { onMount } from "svelte";
  import { _getFileFromS3 } from "./page.server.ts"; // Assuming the file is named page.server.ts

  const bucketName = "peacho-bucket";
  const objectKey = "2fb31edca72c058c5e3d6453abf11fc8c97bc81873bc1a73700dfe7f152aabc8.html";

  _getFileFromS3(bucketName, objectKey)
  .then((fileContents) => {
    console.log("File contents:", fileContents);
    // Here, you can process and use the HTML contents as needed.
  })
  .catch((error) => {
    console.error("Error:", error);
  });

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
