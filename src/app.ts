import { launch, Page } from 'puppeteer';
import { resolve } from 'path';
import { config } from 'dotenv';

import { loadBrowserOptions } from '@app/functions/puppeteer/load-browser-options';

import { Defaults, MockFleetMovement } from '@app/constants/common/app';
import { login, loadMock } from '@app/modules/login';

import { Empire } from '@app/models/empire';

(async () => {
  config({ path: resolve(__dirname, Defaults.EnvDir) });

  const browser = await launch(loadBrowserOptions(process.env.ENV_DEBUG_LEVEL));
  Object.assign(process.env, { browser });

  let page: Page;
  if (process.env.ENV_MOCK) {
    page = await loadMock(resolve(__dirname, Defaults.MockDir), MockFleetMovement.STEP_1_1);
  } else {
    page = await login(process.env.ENV_URL, process.env.ENV_USR, process.env.ENV_PWD);
  }

  Object.assign(process.env, { page });

  if (!page) {
    console.error('Page is undefined. Bye!');
  } else {
    console.info('Start...');

    const empire = new Empire();
    await empire.load(page);

    console.info('Done!');
  }

  // await browser.close();
})();
