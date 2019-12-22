import { sleep } from 'functions/common/sleep';
import { Browser, Page } from 'puppeteer';
import { getBrowserPages } from 'functions/puppeteer/get-browser-pages';
import { performClickOnElement } from 'utils/puppeteer/perform-click';

export async function login(url: string, usr: string, pwd: string): Promise<Page> {
  const browser: Browser = process.env['browser'] as Browser;

  console.log('Logging in...');

  let [main, page] = await getBrowserPages(browser);

  await main.goto(url, { waitUntil: 'load' });
  await performClickOnElement(main, 'span', 'Log in');

  await main.focus('input[type="email"]');
  await main.keyboard.type(usr);

  await main.focus('input[type="password"]');
  await main.keyboard.type(pwd);

  await main.click('button[type="submit"]');
  await main.waitForNavigation();

  console.log('Selecting uni...');
  await main.click('span.serverDetails');
  await sleep();

  console.log('Loading uni...');
  [main, page] = await getBrowserPages(browser);

  return page;
}

export async function loadMock(workdir: string, path: string): Promise<Page> {
  const browser = process.env.browser;
  let [main] = await getBrowserPages(browser);
  await main.goto(`file://${workdir}${path}`, { waitUntil: 'load' });
  return main;
}
