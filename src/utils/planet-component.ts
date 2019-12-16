import { PlanetComponent, PlanetComponentQueryParamKey } from 'constants/ogame/planet-component';

export function getPlanetComponentQueryParam(component: PlanetComponent) {
  return `${PlanetComponentQueryParamKey}=${component}`;
}
