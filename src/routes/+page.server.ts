import { R2_ACCESS_KEY, R2_ACCOUNT_ID, R2_SECRET_KEY } from "$env/static/private";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY,
        secretAccessKey: R2_SECRET_KEY,
    },
});

export async function _getFileFromS3(bucketName: string, objectKey: string): Promise<string> {
    const params = {
      Bucket: bucketName,
      Key: objectKey,
    };
  
    try {
      const command = new GetObjectCommand(params);
      const response = await S3.send(command);
  
      // Assuming the object is in text format, return the contents as a string
      return await response.Body?.toString() || "";
    } catch (error) {
      console.error("Error retrieving file from S3:", error);
      return "";
    }
  }

  