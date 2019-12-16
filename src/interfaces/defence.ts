import { IEntity } from '@app/interfaces/common';

export interface IDefence {
  rocketLauncher: IGun;
  laserCannonLight: IGun;
  laserCannonHeavy: IGun;
  gaussCannon: IGun;
  ionCannon: IGun;
  plasmaCannon: IGun;
  shieldDomeSmall: IGun;
  shieldDomeLarge: IGun;
  missileInterceptor: IGun;
}
export interface IGun {
  _t: IEntity;
  amount: number;
}
