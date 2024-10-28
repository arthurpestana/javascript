import puppeteer from 'puppeteer'
import readlineSync from 'readline-sync'

const connectTransparencia = async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(`https://acessoainformacao.palmas.to.gov.br/cidadao/transparencia/divida_ativa_pdt`);
    //let searchQuestion = readlineSync.question("Digite o valor a ser pesquisado: ") || '0';
    let searchQuestion = "Banco do Brasil"
    
    //await page.waitForSelector("#filter_datamin")
    //await page.waitForSelector("#btnBuscar")
    //page.click("#filter_datamin")
    //let dateInput = document.querySelector("#datamin") as HTMLInputElement;
    //dateInput.value = '01/01/2019';
    
    //page.click("#btnBuscar")
    
    await page.waitForSelector("#search")
    await page.evaluate(() => {
        let searchInput = document.querySelector("#search") as HTMLInputElement;
        searchInput.value = "Banco do Brasil";
        console.log(searchInput.value)

    })

    /*await page.waitForSelector(".col2.colValor")
    const dataInscricao = await page.evaluate(() => {
        let dataInscricao = document.querySelector(".col2.colValor") as HTMLElement;
        return dataInscricao.innerText
    })*/
    //console.log(dataInscricao)
}

connectTransparencia()
