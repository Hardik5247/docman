import { S3 } from "../utils/aws";
import fs from "fs";

const uploadFileToS3 = async (bucket, fileKey, filePath, contentType) => {
    const params = {
        Bucket: bucket,
        Key: fileKey,
        Body: fs.createReadStream(filePath),
        ContentType: contentType,
    };
    return await S3.putObject(params).promise();
};

const uploadPDFBufferToS3 = async (bucket, fileKey, buffer) => {
    const params = {
        Bucket: bucket,
        Key: fileKey,
        Body: Buffer.from(buffer, "base64"),
        ContentType: "application/pdf",
    };
    return await S3.upload(params).promise();
};

export { uploadPDFBufferToS3, uploadFileToS3 };
