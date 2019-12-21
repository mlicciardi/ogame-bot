import { resolve } from 'path';
import { config } from 'dotenv';

import { Defaults, MockFleetMovement } from '@app/constants/common/app';

import { launch, Page } from 'puppeteer';

import { loadBrowserOptions } from '@app/functions/puppeteer/load-browser-options';

import { login, loadMock } from '@app/modules/login';

// import { Empire } from '@app/models/empire';

config({ path: resolve(__dirname, Defaults.EnvDir) });

(async () => {
  const browser = await launch(loadBrowserOptions(process.env.ENV_DEBUG_LEVEL));
  let page: Page;

  if (process.env.MOCK_MODE) {
    page = await loadMock(browser, resolve(__dirname, Defaults.MockDir), MockFleetMovement.STEP_1_1);
  } else {
    page = await login(browser, process.env.ENV_URL, process.env.ENV_USR, process.env.ENV_PWD);
  }

  if (!page) {
    console.error('Page is undefined. Bye!');
  } else {
    console.info('Start...');

    // const empire = new Empire();
    // await empire.load(page);
    // console.debug(empire);

    console.info('Done!');
  }

  // await browser.close();
})();
