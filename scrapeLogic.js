const puppeteer = require("puppeteer");
require("dotenv").config();

const scrapeLogic = async (url,res) => {
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

        // await page.setDefaultNavigationTimeout(0);
        
        await page.goto(url);

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