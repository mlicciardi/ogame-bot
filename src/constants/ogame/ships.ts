import { IOGameEntity } from '@app/interfaces/ogame';

export const FighterLight: IOGameEntity = {
  type: 'number',
  key: 'fighterLight',
  selector: 'span.fighterLight',
  label: 'Fighter Light',
  requiredMetal: 3000,
  requiredCrystal: 1000,
  requiredDeuterium: 0,
};

export const FighterHeavy: IOGameEntity = {
  type: 'number',
  key: 'fighterHeavy',
  selector: 'span.fighterHeavy',
  label: 'Fighter Heavy',
  requiredMetal: 6000,
  requiredCrystal: 4000,
  requiredDeuterium: 0,
};

export const Cruiser: IOGameEntity = {
  type: 'number',
  key: 'cruiser',
  selector: 'span.cruiser',
  label: 'Cruiser',
  requiredMetal: 20000,
  requiredCrystal: 7000,
  requiredDeuterium: 2000,
};

export const Battleship: IOGameEntity = {
  type: 'number',
  key: 'battleship',
  selector: 'span.battleship',
  label: 'Battleship',
  requiredMetal: 45000,
  requiredCrystal: 15000,
  requiredDeuterium: 0,
};

export const Battlecruiser: IOGameEntity = {
  type: 'number',
  key: 'interceptor',
  selector: 'span.interceptor',
  label: 'Battlecruiser',
  requiredMetal: 30000,
  requiredCrystal: 40000,
  requiredDeuterium: 15000,
};

export const Bomber: IOGameEntity = {
  type: 'number',
  key: 'bomber',
  selector: 'span.bomber',
  label: 'Bomber',
  requiredMetal: 50000,
  requiredCrystal: 25000,
  requiredDeuterium: 15000,
};

export const Destroyer: IOGameEntity = {
  type: 'number',
  key: 'destroyer',
  selector: 'span.destroyer',
  label: 'Destroyer',
  requiredMetal: 60000,
  requiredCrystal: 50000,
  requiredDeuterium: 15000,
};

export const Deathstar: IOGameEntity = {
  type: 'number',
  key: 'deathstar',
  selector: 'span.deathstar',
  label: 'Deathstar',
  requiredMetal: 5000000,
  requiredCrystal: 4000000,
  requiredDeuterium: 1000000,
};

export const Reaper: IOGameEntity = {
  type: 'number',
  key: 'reaper',
  selector: 'span.reaper',
  label: 'Reaper',
  requiredMetal: 85000,
  requiredCrystal: 55000,
  requiredDeuterium: 20000,
};

export const Pathfinder: IOGameEntity = {
  type: 'number',
  key: 'explorer',
  selector: 'span.explorer',
  label: 'Pathfinder',
  requiredMetal: 8000,
  requiredCrystal: 15000,
  requiredDeuterium: 8000,
};

export const TransporterSmall: IOGameEntity = {
  type: 'number',
  key: 'transporterSmall',
  selector: 'span.transporterSmall',
  label: 'Transporter Small',
  requiredMetal: 2000,
  requiredCrystal: 2000,
  requiredDeuterium: 0,
};

export const TransporterLarge: IOGameEntity = {
  type: 'number',
  key: 'transporterLarge',
  selector: 'span.transporterLarge',
  label: 'Transporter Large',
  requiredMetal: 6000,
  requiredCrystal: 6000,
  requiredDeuterium: 0,
};

export const ColonyShip: IOGameEntity = {
  type: 'number',
  key: 'colonyShip',
  selector: 'span.colonyShip',
  label: 'Colony Ship',
  requiredMetal: 10000,
  requiredCrystal: 20000,
  requiredDeuterium: 10000,
};

export const Recycler: IOGameEntity = {
  type: 'number',
  key: 'recycler',
  selector: 'span.recycler',
  label: 'Recycler',
  requiredMetal: 10000,
  requiredCrystal: 6000,
  requiredDeuterium: 2000,
};

export const EspionageProbe: IOGameEntity = {
  type: 'number',
  key: 'espionageProbe',
  selector: 'span.espionageProbe',
  label: 'Espionage Probe',
  requiredMetal: 0,
  requiredCrystal: 1000,
  requiredDeuterium: 0,
};

export const SolarSatellite: IOGameEntity = {
  type: 'number',
  key: 'solarSatellite',
  selector: 'span.solarSatellite',
  label: 'Solar Satellite',
  requiredMetal: 0,
  requiredCrystal: 2000,
  requiredDeuterium: 500,
};

export const Crawler: IOGameEntity = {
  type: 'number',
  key: 'resbuggy',
  selector: 'span.resbuggy',
  label: 'Crawler',
  requiredMetal: 2000,
  requiredCrystal: 2000,
  requiredDeuterium: 1000,
};

export const Ships = {
  FighterLight,
  FighterHeavy,
  Cruiser,
  Battleship,
  Battlecruiser,
  Bomber,
  Destroyer,
  Deathstar,
  Reaper,
  Pathfinder,
  TransporterSmall,
  TransporterLarge,
  ColonyShip,
  Recycler,
  EspionageProbe,
  SolarSatellite,
  Crawler,
};

export default Ships;
