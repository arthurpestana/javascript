import Puppeteer from "puppeteer";

async function PuppeteerFunction() {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
}

PuppeteerFunction();