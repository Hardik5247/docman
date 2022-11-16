import { getBrowserInstance } from "../core/browser";

const convertHtmlToPdf = async (html, pdfOptions) => {
    let browser = null;
    let page = null;

    try {
        console.log("Fetching Browser Instance");
        browser = await getBrowserInstance();

        if (!browser) {
            throw Error(`Error in launching browser`);
        }
    } catch (error) {
        throw Error(error);
    }

    try {
        try {
            console.log("Creating page in browser");
            page = await browser.newPage(); // start a new blank page
        } catch (error) {
            //   logger.error(`Error in creating page ${JSON.stringify(error)}`);
            throw Error(error);
        }

        try {
            console.log("Setting content in browser");
            await page.setContent(html, { waitUntil: "load", timeout: 0 });
        } catch (error) {
            // logger.error(`Error in Set content ${JSON.stringify(error)}`);
            throw Error(error);
        }

        try {
            console.log("Creating pdf");
            let pdf = await page.pdf(pdfOptions);
            return pdf;
        } catch (error) {
            //   logger.error(`Error in Creating pdf ${JSON.stringify(error)}`);
            throw Error(error);
        }
    } catch (error) {
        // logger.error(`Error in Creating Pdf from Html ${JSON.stringify(error)}`);
        throw Error(error);
    } finally {
        console.log("Closing browser page");

        if (browser && page) {
            await page.close();
        }
        browser = null;
    }
};

export { convertHtmlToPdf };
