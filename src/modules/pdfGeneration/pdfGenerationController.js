import { generateHtml } from "../../utils/htmlTemplatingUtility";
import { convertHtmlToPdf } from "../../utils/pdfGenerationUtility";
import { successResponse, internalServer } from "../../utils/response";
import { uploadPDFBufferToS3 } from "../../core/s3Service";
import config from "../../config";

const generatePdf = async (req, res) => {
    try {
        const pdfData = req.body.payload;
        const templateId = req.body.templateId;

        const html = await generateHtml(pdfData, templateId);

        const pdfOptions = {
            format: "A4",
            printBackground: true,
        };
        const pdfBuffer = await convertHtmlToPdf(html, pdfOptions);

        await uploadPDFBufferToS3(
            config.S3_BUCKET,
            `${templateId}/${new Date()}`,
            pdfBuffer
        );

        return successResponse(res, "", Buffer.from(pdfBuffer).toString('base64'));
    } catch (err) {
        console.log(err);
        return internalServer(res, "Internal Server Error");
    }
};

export default {
    generatePdf,
};
