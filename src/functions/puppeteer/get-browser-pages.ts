import { sleep } from 'functions/common/sleep';
import { Browser } from 'puppeteer';

export async function getBrowserPages(browser: Browser) {
  await sleep();
  return await browser.pages();
}
