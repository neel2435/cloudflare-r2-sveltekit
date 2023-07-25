import express from "express";
import { getFileFromS3 } from "./page.server"; 

const app = express();
const port = 3000;

app.get("/api/getFileFromS3", async (req, res) => {
  const bucketName = "your-bucket-name"; 
  const objectKey = "your-html-file.html"; 

  try {
    const fileContents = await getFileFromS3(bucketName, objectKey);
    res.send(fileContents);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error retrieving file from S3");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});