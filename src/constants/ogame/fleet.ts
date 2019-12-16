import { IOGameEntity } from '@app/interfaces/ogame';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const FighterLight: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'fighterLight',
  label: 'Fighter Light',
  selector: 'span.fighterLight',
  subSelector: 'span.fighterLight >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="fighterLight"]',
};

export const FighterHeavy: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'fighterHeavy',
  label: 'Fighter Heavy',
  selector: 'span.fighterHeavy',
  subSelector: 'span.fighterHeavy >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="fighterHeavy"]',
};

export const Cruiser: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'cruiser',
  label: 'Cruiser',
  selector: 'span.cruiser',
  subSelector: 'span.cruiser >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="cruiser"]',
};

export const Battleship: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'battleship',
  label: 'Battleship',
  selector: 'span.battleship',
  subSelector: 'span.battleship >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="battleship"]',
};

export const Battlecruiser: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'interceptor',
  label: 'Battlecruiser',
  selector: 'span.interceptor',
  subSelector: 'span.interceptor >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="interceptor"]',
};

export const Bomber: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'bomber',
  label: 'Bomber',
  selector: 'span.bomber',
  subSelector: 'span.bomber >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="bomber"]',
};

export const Destroyer: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'destroyer',
  label: 'Destroyer',
  selector: 'span.destroyer',
  subSelector: 'span.destroyer >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="destroyer"]',
};

export const Deathstar: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'deathstar',
  label: 'Deathstar',
  selector: 'span.deathstar',
  subSelector: 'span.deathstar >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="deathstar"]',
};

export const Reaper: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'reaper',
  label: 'Reaper',
  selector: 'span.reaper',
  subSelector: 'span.reaper >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="reaper"]',
};

export const Pathfinder: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'explorer',
  label: 'Pathfinder',
  selector: 'span.explorer',
  subSelector: 'span.explorer >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="explorer"]',
};

export const TransporterSmall: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'transporterSmall',
  label: 'Transporter Small',
  selector: 'span.transporterSmall',
  subSelector: 'span.transporterSmall >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="transporterSmall"]',
};

export const TransporterLarge: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'transporterLarge',
  label: 'Transporter Large',
  selector: 'span.transporterLarge',
  subSelector: 'span.transporterLarge >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="transporterLarge"]',
};

export const ColonyShip: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'colonyShip',
  label: 'Colony Ship',
  selector: 'span.colonyShip',
  subSelector: 'span.colonyShip >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="colonyShip"]',
};

export const Recycler: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'recycler',
  label: 'Recycler',
  selector: 'span.recycler',
  subSelector: 'span.recycler >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="recycler"]',
};

export const EspionageProbe: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'espionageProbe',
  label: 'Espionage Probe',
  selector: 'span.espionageProbe',
  subSelector: 'span.espionageProbe >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="espionageProbe"]',
};

export const SolarSatellite: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'solarSatellite',
  label: 'Solar Satellite',
  selector: 'span.solarSatellite',
  subSelector: 'span.solarSatellite >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="solarSatellite"]',
};

export const Crawler: IOGameEntity = {
  type: OGameEntityType.Amount,
  key: 'resbuggy',
  label: 'Crawler',
  selector: 'span.resbuggy',
  subSelector: 'span.resbuggy >span.amount',
  attribute: 'data-value',
  inputSelector: 'input[name="resbuggy"]',
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
