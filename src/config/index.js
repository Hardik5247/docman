import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({ path: `${process.env.NODE_ENV}.env` });

if (envFound.error) {
    // This error should crash whole process
    console.log("️  Couldn't find .env file  ⚠️ ");
    //throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 3000,
    S3_BUCKET: process.env.S3_BUCKET || "dev-docman",
    RESOURCE_PATH: process.env.RESOURCE_PATH || "http://localhost:3000",
};
