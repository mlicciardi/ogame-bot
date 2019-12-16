import { Page } from 'puppeteer';
import { Planet } from '@app/models/planet';

import { fetchPlanetIds } from '@app/modules/empire';

export class Empire {
  public planets: Array<Planet>;

  public async load(page: Page): Promise<void> {
    const planetIdSelectors = await fetchPlanetIds(page);

    planetIdSelectors.forEach((x) => {
      const p = new Planet(x);
      // await p.load(page);
      this.planets.push(p);
    });
  }
}
