import { launch, Page } from 'puppeteer';

const url = 'https://lobby.ogame.gameforge.com/en_GB/hub';
const usr = 'usr';
const pwd = 'psw';

async function main() {
  const browser = await launch({
    // headless: true,
    headless: false,
    args: ['--start-fullscreen'],
  });

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'load' });

  await performClickOnElement(page, 'span', 'Log in');

  await page.focus('input[type="email"]');
  await page.keyboard.type(usr);

  await page.focus('input[type="password"]');
  await page.keyboard.type(pwd);

  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  await page.click('span.serverDetails');

  const ids: Array<string> = [];

  console.debug('evaluate pre');
  await page.evaluate(() => {
    console.debug('evaluate in');
    const elements: HTMLCollection = document.getElementsByClassName('smallplanet');
    console.debug(elements.length);
    for (let el of elements) {
      console.debug(`${el.id} pushed for navigation ...`);
      ids.push(el.id);
    }
  });

  ids.forEach(async (id) => {
    await page.click(id);
    await page.waitForNavigation();
    console.debug(`${id} navigated ...`);
    await screenshot(page);
    await page.waitFor(1000);
  });

  // await page.close();
  // browser.close();
}

const screenshot = async (page: Page) => {
  await page.screenshot({ path: `./tmp/${Date.now()}.png` });
};

const performClickOnElement = async (page: Page, tag: string, text: string) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//${tag}[contains(text(), ${escapedText})]`);

  if (linkHandlers.length === 1) {
    await linkHandlers[0].click();
  } else {
    if (!linkHandlers.length) throw new Error(`linkHandlers not found: ${text}`);

    throw new Error(`Multiple linkHandlers found: ${linkHandlers.length}`);
  }
};

const escapeXpathString = (searchString: string) => {
  const splitedQuotes = searchString.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

main();
