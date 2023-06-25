const puppeteer = require("puppeteer");
// require("dotenv").config();

const scrapeLogic = async (res) => {
    const browser = await puppeteer.launch({
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
        executablePath:
            process.env.NODE_ENV === "production"
                ? process.env.PUPPETEER_EXECUTABLE_PATH
                : puppeteer.executablePath(),
    });
    try {
        const page = await browser.newPage();

        await page.goto('https://shopee.co.th/%F0%9F%8D%85-TOMATAL-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%87%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%97%E0%B8%A8-3-%E0%B8%AA%E0%B8%B5-%E0%B8%9C%E0%B8%87%E0%B8%8A%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B8%9C%E0%B8%87%E0%B8%8A%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%97%E0%B8%A8-50-g.-i.78549877.19973212653?sp_atk=cb91621b-a8e1-4ced-99d4-de69f09a36e4&xptdk=cb91621b-a8e1-4ced-99d4-de69f09a36e4');

        // Set screen size
        await page.setViewport({ width: 1080, height: 1024 });

        const textSelector = await page.waitForSelector(
            '.product-detail'
        );
        const fullTitle = await textSelector?.evaluate(el => el.textContent);

        // Print the full title
        console.log('The title of this blog post is "%s".', fullTitle);
        res.send(fullTitle)

    } catch (e) {
        console.error(e);
        res.send(`Something went wrong while running Puppeteer: ${e}`);
    } finally {
        await browser.close();
    }
};

module.exports = { scrapeLogic };