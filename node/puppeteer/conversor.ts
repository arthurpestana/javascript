import puppeteer from "puppeteer";
import ReadlineSync from "readline-sync";

const conversorCoin = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    let firstCoin = ReadlineSync.question("Digite a moeda de origem: ") || 'dolar';
    let secondCoin = ReadlineSync.question("Digite a moeda de destino: ") || 'real';
    let url = `https://www.google.com/search?q=${firstCoin}+para+${secondCoin}&oq=${firstCoin}+para+${secondCoin}`;
    await page.goto(url)

    const result = await page.evaluate(() => {
        let inputElement = document.querySelector('.lWzCpb.a61j6') as HTMLInputElement;
        let value = inputElement.value;
        return value;
    });
    console.log(result);
    browser.close();
}

conversorCoin()