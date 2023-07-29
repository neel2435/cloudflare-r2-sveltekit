import http from "http";
import { _getFileFromS3 } from "./+page.server";

const port = 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/_getFileFromS3" && req.method === "GET") {
    const bucketName = "peacho-bucket";
    const objectKey = "cfd63f21ef797ab05dc2a65bc1ef3fd4493e5d4b34fe641ccbdd3291e9abf655.html";

    try {
      const fileContents = await _getFileFromS3(bucketName, objectKey);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fileContents);
    } catch (error) {
      console.error("Error:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error retrieving file from S3");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});