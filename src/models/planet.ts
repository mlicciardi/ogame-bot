// import { Page } from 'puppeteer';

export class Planet {
  public selector: string;
  public id: string;

  public name: string;

  public coords: string;
  public galaxy: number;
  public system: number;
  public position: number;

  public moon: Planet | null;
  public hasMoon = false;

  constructor(idSelector: string) {
    [this.selector, this.id] = idSelector.split('-');
    this.selector = idSelector;
  }

  // public async load(page: Page): Promise<void> {}
}
