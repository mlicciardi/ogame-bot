import { Components, ComponentQueryParamKey } from '@app/constants/ogame/components';

export function getComponentQueryParam(component: Components) {
  return `${ComponentQueryParamKey}=${component}`;
}
