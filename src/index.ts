import { launch, Page } from 'puppeteer';

const loginUrl = 'https://lobby.ogame.gameforge.com/en_GB/hub';

async function main() {
  const browser = await launch({
    headless: false,
    args: ['--start-fullscreen'],
  });

  const page = await browser.newPage();

  await page.goto(loginUrl, { waitUntil: 'load' });

  await performClickOnElement(page, 'span', 'Log in');

  await screenshot(page);

  await page.close();
  browser.close();
}

const screenshot = async (page: Page) => {
  await page.screenshot({ path: `./tmp/${Date.now()}.png` });
};

const performClickOnElement = async (page: Page, tag: string, text: string) => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(
    `//${tag}[contains(text(), ${escapedText})]`,
  );

  if (linkHandlers.length > 0) {
    await linkHandlers[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};

const escapeXpathString = (searchString: string) => {
  const splitedQuotes = searchString.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};

main();
