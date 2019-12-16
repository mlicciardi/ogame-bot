import { DebugLevel } from 'constants/common/app';
import { PuppeteerBrowserOption } from 'constants/puppeteer/browser-options';

export function loadBrowserOptions(level: DebugLevel | string = null): Object {
  if (typeof level === 'string') level = parseInt(level, 10);

  switch (level) {
    case 0:
      return PuppeteerBrowserOption.Headless;
    case 1:
      return PuppeteerBrowserOption.ChromiumFullscreen;
    case 2:
      return PuppeteerBrowserOption.ChromiumFullscreenWithDevTools;
    default:
      return PuppeteerBrowserOption.Headless;
  }
}
