import { IOGameEntity } from '@app/interfaces/ogame';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const FighterLight: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'fighterLight',
  label: 'Fighter Light',
  selector: 'span.fighterLight',
  subSelector: 'span.fighterLight >span.amount',
  attribute: 'data-value',
  requiredMetal: 3000,
  requiredCrystal: 1000,
  requiredDeuterium: 0,
};

export const FighterHeavy: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'fighterHeavy',
  label: 'Fighter Heavy',
  selector: 'span.fighterHeavy',
  subSelector: 'span.fighterHeavy >span.amount',
  attribute: 'data-value',
  requiredMetal: 6000,
  requiredCrystal: 4000,
  requiredDeuterium: 0,
};

export const Cruiser: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'cruiser',
  label: 'Cruiser',
  selector: 'span.cruiser',
  subSelector: 'span.cruiser >span.amount',
  attribute: 'data-value',
  requiredMetal: 20000,
  requiredCrystal: 7000,
  requiredDeuterium: 2000,
};

export const Battleship: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'battleship',
  label: 'Battleship',
  selector: 'span.battleship',
  subSelector: 'span.battleship >span.amount',
  attribute: 'data-value',
  requiredMetal: 45000,
  requiredCrystal: 15000,
  requiredDeuterium: 0,
};

export const Battlecruiser: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'interceptor',
  label: 'Battlecruiser',
  selector: 'span.interceptor',
  subSelector: 'span.interceptor >span.amount',
  attribute: 'data-value',
  requiredMetal: 30000,
  requiredCrystal: 40000,
  requiredDeuterium: 15000,
};

export const Bomber: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'bomber',
  label: 'Bomber',
  selector: 'span.bomber',
  subSelector: 'span.bomber >span.amount',
  attribute: 'data-value',
  requiredMetal: 50000,
  requiredCrystal: 25000,
  requiredDeuterium: 15000,
};

export const Destroyer: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'destroyer',
  label: 'Destroyer',
  selector: 'span.destroyer',
  subSelector: 'span.destroyer >span.amount',
  attribute: 'data-value',
  requiredMetal: 60000,
  requiredCrystal: 50000,
  requiredDeuterium: 15000,
};

export const Deathstar: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'deathstar',
  label: 'Deathstar',
  selector: 'span.deathstar',
  subSelector: 'span.deathstar >span.amount',
  attribute: 'data-value',
  requiredMetal: 5000000,
  requiredCrystal: 4000000,
  requiredDeuterium: 1000000,
};

export const Reaper: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'reaper',
  label: 'Reaper',
  selector: 'span.reaper',
  subSelector: 'span.reaper >span.amount',
  attribute: 'data-value',
  requiredMetal: 85000,
  requiredCrystal: 55000,
  requiredDeuterium: 20000,
};

export const Pathfinder: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'explorer',
  label: 'Pathfinder',
  selector: 'span.explorer',
  subSelector: 'span.explorer >span.amount',
  attribute: 'data-value',
  requiredMetal: 8000,
  requiredCrystal: 15000,
  requiredDeuterium: 8000,
};

export const TransporterSmall: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'transporterSmall',
  label: 'Transporter Small',
  selector: 'span.transporterSmall',
  subSelector: 'span.transporterSmall >span.amount',
  attribute: 'data-value',
  requiredMetal: 2000,
  requiredCrystal: 2000,
  requiredDeuterium: 0,
};

export const TransporterLarge: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'transporterLarge',
  label: 'Transporter Large',
  selector: 'span.transporterLarge',
  subSelector: 'span.transporterLarge >span.amount',
  attribute: 'data-value',
  requiredMetal: 6000,
  requiredCrystal: 6000,
  requiredDeuterium: 0,
};

export const ColonyShip: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'colonyShip',
  label: 'Colony Ship',
  selector: 'span.colonyShip',
  subSelector: 'span.colonyShip >span.amount',
  attribute: 'data-value',
  requiredMetal: 10000,
  requiredCrystal: 20000,
  requiredDeuterium: 10000,
};

export const Recycler: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'recycler',
  label: 'Recycler',
  selector: 'span.recycler',
  subSelector: 'span.recycler >span.amount',
  attribute: 'data-value',
  requiredMetal: 10000,
  requiredCrystal: 6000,
  requiredDeuterium: 2000,
};

export const EspionageProbe: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'espionageProbe',
  label: 'Espionage Probe',
  selector: 'span.espionageProbe',
  subSelector: 'span.espionageProbe >span.amount',
  attribute: 'data-value',
  requiredMetal: 0,
  requiredCrystal: 1000,
  requiredDeuterium: 0,
};

export const SolarSatellite: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'solarSatellite',
  label: 'Solar Satellite',
  selector: 'span.solarSatellite',
  subSelector: 'span.solarSatellite >span.amount',
  attribute: 'data-value',
  requiredMetal: 0,
  requiredCrystal: 2000,
  requiredDeuterium: 500,
};

export const Crawler: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'resbuggy',
  label: 'Crawler',
  selector: 'span.resbuggy',
  subSelector: 'span.resbuggy >span.amount',
  attribute: 'data-value',
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
