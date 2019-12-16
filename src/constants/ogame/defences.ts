import { IEntity } from '@app/interfaces/common';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const RocketLauncher: IEntity = {
  type: OGameEntityType.Amount,
  key: 'rocketLauncher',
  label: 'Rocket Launcher',
  selector: 'span.rocketLauncher',
  subSelector: 'span.rocketLauncher >span.amount',
  attribute: 'data-value',
  requiredMetal: 2000,
  requiredCrystal: 0,
  requiredDeuterium: 0,
};
export const LaserCannonLight: IEntity = {
  type: OGameEntityType.Amount,
  key: 'laserCannonLight',
  label: 'Laser Cannon Light',
  selector: 'span.laserCannonLight',
  subSelector: 'span.laserCannonLight >span.amount',
  attribute: 'data-value',
  requiredMetal: 1500,
  requiredCrystal: 500,
  requiredDeuterium: 0,
};
export const LaserCannonHeavy: IEntity = {
  type: OGameEntityType.Amount,
  key: 'laserCannonHeavy',
  label: 'Laser Cannon Heavy',
  selector: 'span.laserCannonHeavy',
  subSelector: 'span.laserCannonHeavy >span.amount',
  attribute: 'data-value',
  requiredMetal: 6000,
  requiredCrystal: 2000,
  requiredDeuterium: 0,
};
export const GaussCannon: IEntity = {
  type: OGameEntityType.Amount,
  key: 'gaussCannon',
  label: 'Gauss Cannon',
  selector: 'span.gaussCannon',
  subSelector: 'span.gaussCannon >span.amount',
  attribute: 'data-value',
  requiredMetal: 20000,
  requiredCrystal: 15000,
  requiredDeuterium: 2000,
};
export const IonCannon: IEntity = {
  type: OGameEntityType.Amount,
  key: 'ionCannon',
  label: 'Ion Cannon',
  selector: 'span.ionCannon',
  subSelector: 'span.ionCannon >span.amount',
  attribute: 'data-value',
  requiredMetal: 5000,
  requiredCrystal: 3000,
  requiredDeuterium: 0,
};
export const PlasmaCannon: IEntity = {
  type: OGameEntityType.Amount,
  key: 'plasmaCannon',
  label: 'Plasma Cannon',
  selector: 'span.plasmaCannon',
  subSelector: 'span.plasmaCannon >span.amount',
  attribute: 'data-value',
  requiredMetal: 50000,
  requiredCrystal: 50000,
  requiredDeuterium: 30000,
};
export const ShieldDomeSmall: IEntity = {
  type: OGameEntityType.Amount,
  key: 'shieldDomeSmall',
  label: 'Shield Dome Small',
  selector: 'span.shieldDomeSmall',
  subSelector: 'span.shieldDomeSmall >span.amount',
  attribute: 'data-value',
  requiredMetal: 10000,
  requiredCrystal: 10000,
  requiredDeuterium: 0,
};
export const ShieldDomeLarge: IEntity = {
  type: OGameEntityType.Amount,
  key: 'shieldDomeLarge',
  label: 'Shield Dome Large',
  selector: 'span.shieldDomeLarge',
  subSelector: 'span.shieldDomeLarge >span.amount',
  attribute: 'data-value',
  requiredMetal: 50000,
  requiredCrystal: 50000,
  requiredDeuterium: 0,
};
export const MissileInterceptor: IEntity = {
  type: OGameEntityType.Amount,
  key: 'missileInterceptor',
  label: 'Missile Interceptor',
  selector: 'span.missileInterceptor',
  subSelector: 'span.missileInterceptor >span.amount',
  attribute: 'data-value',
  requiredMetal: 8000,
  requiredCrystal: 0,
  requiredDeuterium: 2000,
};
export const MissileInterplanetary: IEntity = {
  type: OGameEntityType.Amount,
  key: 'missileInterplanetary',
  label: 'Missile Interplanetary',
  selector: 'span.missileInterplanetary',
  subSelector: 'span.missileInterplanetary >span.amount',
  attribute: 'data-value',
  requiredMetal: 12500,
  requiredCrystal: 2500,
  requiredDeuterium: 10000,
};

export const Defences = {
  RocketLauncher,
  LaserCannonLight,
  LaserCannonHeavy,
  GaussCannon,
  IonCannon,
  PlasmaCannon,
  ShieldDomeSmall,
  ShieldDomeLarge,
  MissileInterceptor,
  MissileInterplanetary,
};

export default Defences;
