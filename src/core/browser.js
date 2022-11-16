import puppeteer from "puppeteer";

let browser = null;

const launchBrowser = async function () {
    try {
        console.log("Launching Browser");

        const args = [
            /**
             * The GPU isn’t usually available inside a Docker container,
             * unless you’ve specially configured the host. Setting this flag
             * explicitly instructs Chrome not to try and use GPU-based rendering.
             */
            "--disable-gpu",

            /**
             * Necessary to avoid running into issues with Docker’s default
             * low shared memory space of 64MB. Chrome will write into /tmp instead.
             */
            "--disable-dev-shm-usage",

            /**
             * Disables Chrome’s sandboxing, a step which is required when
             * running as the root user (the default in a Docker container).
             * Only use if you absolutely trust the content you open in Chrome.
             */
            "--disable-setuid-sandbox",
            "--no-sandbox",

            /**
             * Removes zombie process and must be used in conjunction with --no-sandbox.
             */
            "--no-zygote",

            /**
             * Runs the renderer and plugins in the same process as the browser.
             * Only chromium supports this flag (chrome doesn't). Slight performance
             * improvement (~100 ms less) when using a existing browser.
             */
            "--single-process",
        ];

        browser = await puppeteer.launch({
            args: args,
            headless: true,
        });
    } catch (error) {
        console.log(`Error in launching browser ${error}`);
        throw Error(error);
    }
};

const getBrowserInstance = async function () {
    if (!browser) {
        console.log(
            "Browser instance not found - Creating new browser instance"
        );
        await launchBrowser();
    }
    return browser;
};

export { getBrowserInstance };
