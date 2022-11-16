const AWSXRay = require("aws-xray-sdk-core");

AWSXRay.setContextMissingStrategy(() => {});

const AWS = AWSXRay.captureAWS(require("aws-sdk"));

const S3 = new AWS.S3({ region: "ap-south-1" });

export { S3 };
