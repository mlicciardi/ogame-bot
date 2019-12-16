import { Components, ComponentQueryParamKey } from '@app/constants/ogame/component';

export function getComponentQueryParam(component: Components) {
  return `${ComponentQueryParamKey}=${component}`;
}
