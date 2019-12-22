import { Page } from 'puppeteer';
import { Moon } from './moon';

export class Planet {
  public selector: string;
  public id: string;

  public name: string;

  public coords: string;
  public galaxy: number;
  public system: number;
  public position: number;

  public moon: Moon | null;

  public hasMoon: boolean;

  constructor(idSelector: string) {
    [this.selector, this.id] = idSelector.split('-');
    this.selector = idSelector;
  }

  public async load(page: Page): Promise<void> {
    [this.name, this.coords, this.hasMoon] = await page.evaluate((selector) => {
      let node, name, coords, moonlink;

      node = document.querySelector(`div#${selector} >a.planetlink >span.planet-name`);
      if (node) name = node.innerText;

      node = document.querySelector(`div#${selector} >a.planetlink >span.planet-koords`);
      if (node) coords = node.innerText;

      node = document.querySelector(`div#${selector} >a.moonlink`);
      moonlink = !!node;

      return [name, coords, moonlink];
    }, this.selector);

    this.coords = this.coords.replace('[', '');
    this.coords = this.coords.replace(']', '');

    [this.galaxy, this.system, this.position] = this.coords.split(':').map((x) => parseInt(x, 10));

    if (this.hasMoon) {
      // this.moon = new Moon(this.selector);
    }

    await this.loadFleet();
  }

  private async loadFleet(): Promise<void> {}
}
