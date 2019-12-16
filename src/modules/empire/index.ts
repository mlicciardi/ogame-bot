import { sleep } from 'functions/common/sleep';
import { Page } from 'puppeteer';

export async function fetchPlanetIds(page: Page): Promise<Array<string>> {
  const ids = await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('div.smallplanet')];
    return nodes.map((x) => x.id);
  });
  return ids;
}

export async function navigatePlanets(page: Page): Promise<void> {
  const planetIds = await fetchPlanetIds;

  for (let i = 0; i < planetIds.length; i++) {
    const id = planetIds[i];

    console.log(`Navigating ${id}...`);
    await page.click(`#${id}`);
    await sleep();
    const hightlightPlanet = await page.evaluate(() => {
      const node = document.querySelector('div.hightlightPlanet');
      return node.id;
    });
    console.log(`Navigated ${hightlightPlanet}!`);

    await sleep();
    console.debug('Awake!');
  }
}
