import { sleep } from 'functions/common/sleep';
import { Browser } from 'puppeteer';

export async function getBrowserPages(browser) {
  await sleep();
  return await (browser as Browser).pages();
}
