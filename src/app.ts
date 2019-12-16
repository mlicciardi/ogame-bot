import { resolve } from 'path';
import { config } from 'dotenv';

import { launch } from 'puppeteer';

import { loadBrowserOptions } from '@app/functions/puppeteer/load-browser-options';

import { login } from '@app/modules/login';

import { Empire } from '@app/models/empire';

config({ path: resolve(__dirname, '../.env') });

(async () => {
  const browser = await launch(loadBrowserOptions(process.env.ENV_DEBUG_LEVEL));

  let page = await login(browser, process.env.ENV_URL, process.env.ENV_USR, process.env.ENV_PWD);

  if (!page) {
    console.error('Page is undefined. Bye!');
    await browser.close();
  } else {
    console.info('Start...');
    const empire = new Empire();
    await empire.load(page);
    console.debug(empire);
    console.info('Done!');
    // browser.close();
  }
})();
