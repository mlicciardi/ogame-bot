import { IOGameEntity } from '@app/interfaces/ogame';

export const RocketLauncher: IOGameEntity = {
  type: 'number',
  key: 'rocketLauncher',
  selector: 'rocketLauncher',
  label: 'Rocket Launcher',
  requiredMetal: 2000,
  requiredCrystal: 0,
  requiredDeuterium: 0,
};
export const LaserCannonLight: IOGameEntity = {
  type: 'number',
  key: 'laserCannonLight',
  selector: 'laserCannonLight',
  label: 'Laser Cannon Light',
  requiredMetal: 1500,
  requiredCrystal: 500,
  requiredDeuterium: 0,
};
export const LaserCannonHeavy: IOGameEntity = {
  type: 'number',
  key: 'laserCannonHeavy',
  selector: 'laserCannonHeavy',
  label: 'Laser Cannon Heavy',
  requiredMetal: 6000,
  requiredCrystal: 2000,
  requiredDeuterium: 0,
};
export const GaussCannon: IOGameEntity = {
  type: 'number',
  key: 'gaussCannon',
  selector: 'gaussCannon',
  label: 'Gauss Cannon',
  requiredMetal: 20000,
  requiredCrystal: 15000,
  requiredDeuterium: 2000,
};
export const IonCannon: IOGameEntity = {
  type: 'number',
  key: 'ionCannon',
  selector: 'ionCannon',
  label: 'Ion Cannon',
  requiredMetal: 5000,
  requiredCrystal: 3000,
  requiredDeuterium: 0,
};
export const PlasmaCannon: IOGameEntity = {
  type: 'number',
  key: 'plasmaCannon',
  selector: 'plasmaCannon',
  label: 'Plasma Cannon',
  requiredMetal: 50000,
  requiredCrystal: 50000,
  requiredDeuterium: 30000,
};
export const ShieldDomeSmall: IOGameEntity = {
  type: 'number',
  key: 'shieldDomeSmall',
  selector: 'shieldDomeSmall',
  label: 'Shield Dome Small',
  requiredMetal: 10000,
  requiredCrystal: 10000,
  requiredDeuterium: 0,
};
export const ShieldDomeLarge: IOGameEntity = {
  type: 'number',
  key: 'shieldDomeLarge',
  selector: 'shieldDomeLarge',
  label: 'Shield Dome Large',
  requiredMetal: 50000,
  requiredCrystal: 50000,
  requiredDeuterium: 0,
};
export const MissileInterceptor: IOGameEntity = {
  type: 'number',
  key: 'missileInterceptor',
  selector: 'missileInterceptor',
  label: 'Missile Interceptor',
  requiredMetal: 8000,
  requiredCrystal: 0,
  requiredDeuterium: 2000,
};
export const MissileInterplanetary: IOGameEntity = {
  type: 'number',
  key: 'missileInterplanetary',
  selector: 'missileInterplanetary',
  label: 'Missile Interplanetary',
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
