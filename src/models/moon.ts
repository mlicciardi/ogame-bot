import { Page } from 'puppeteer';

export class Moon {
  public selector: string;
  public id: string;

  public name: string;

  public coords: string;
  public galaxy: number;
  public system: number;
  public position: number;

  constructor(idSelector: string) {
    [this.selector, this.id] = idSelector.split('-');
    this.selector = idSelector;
  }

  public async load(page: Page): Promise<void> {
    [this.name, this.coords] = await page.evaluate((selector) => {
      let name = document.querySelector(`div#${selector} >a.planetlink >span.planet-name`);
      let coords = document.querySelector(`div#${selector} >a.planetlink >span.planet-koords`);

      return [name.innerHTML, coords.innerHTML];
    }, this.selector);

    this.coords = this.coords.replace('[', '');
    this.coords = this.coords.replace(']', '');

    [this.galaxy, this.system, this.position] = this.coords.split(':').map((x) => parseInt(x, 10));
  }
}
