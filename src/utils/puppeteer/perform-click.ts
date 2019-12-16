import { Page } from 'puppeteer';

export async function performClickOnElement(page: Page, tag: string, text: string) {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//${tag}[contains(text(), ${escapedText})]`);

  if (linkHandlers.length === 1) {
    await linkHandlers[0].click();
  } else {
    if (!linkHandlers.length) throw new Error(`linkHandlers not found: ${text}`);

    throw new Error(`Multiple linkHandlers found: ${linkHandlers.length}`);
  }
}

const escapeXpathString = (searchString: string) => {
  const splitedQuotes = searchString.replace(/'/g, `', "'", '`);
  return `concat('${splitedQuotes}', '')`;
};
