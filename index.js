const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();
const puppeteer = require('puppeteer')

const PORT = process.env.PORT || 4000;

app.get("/scrape", (req, res) => {
  scrapeLogic(req.query.url,res);
// const url ="https://www.lazada.co.th/products/nirva-40-i4720240792-s19467494940.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A4720240792%253Bsrc%253ALazadaMainSrp%253Brn%253Ac3291e50dc65ed1c1cb8400d367637b0%253Bregion%253Ath%253Bsku%253A4720240792_TH%253Bprice%253A990%253Bclient%253Adesktop%253Bsupplier_id%253A1000278241%253Bpromotion_biz%253A%253Basc_category_id%253A8995%253Bitem_id%253A4720240792%253Bsku_id%253A19467494940%253Bshop_id%253A505937&fastshipping=0&freeshipping=1&fs_ab=2&fuse_fs=1&lang=en&location=Phitsanulok&price=9.9E%202&priceCompare=&ratingscore=0&request_id=c3291e50dc65ed1c1cb8400d367637b0&review=&sale=0&search=1&source=search&spm=a2o4m.searchlistcategory.list.i40.22b4547fxH9XMS&stock=1";

// async function scrape() {
//    const browser = await puppeteer.launch({})
//    const page = await browser.newPage()

//    await page.goto(url);
//    var element = await page.waitForSelector(".page-section")
//    var text = await page.evaluate(element => element.textContent, element)
//    console.log(text)
//    res.send(text);
//    browser.close()
// }
// scrape()
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});