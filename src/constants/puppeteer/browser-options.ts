export const PuppeteerBrowserOption = {
  Headless: { headless: true },
  ChromiumFullscreen: {
    headless: false,
    defaultViewport: null,
    args: ['--start-fullscreen'],
  },
  ChromiumFullscreenWithDevTools: {
    headless: false,
    defaultViewport: null,
    args: ['--start-fullscreen', '--auto-open-devtools-for-tabs'],
    devtools: true,
  },
};
