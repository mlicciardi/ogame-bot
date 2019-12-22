import { Page } from 'puppeteer';

import { MockFleetDispatch } from '@app/constants/common/app';
import { loadMock } from '@app/modules/login';

export class Fleet {
  public async load(page: Page, planetId: string): Promise<void> {
    page = await loadMock(browser, resolve(__dirname, Defaults.MockDir), MockFleetMovement.STEP_1_1);
  }
}
