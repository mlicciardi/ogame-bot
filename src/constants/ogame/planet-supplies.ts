import { IOGameEntity } from '@app/interfaces/ogame';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const MetalMine: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'metalMine',
  label: 'Metal Mine',
  selector: 'span.metalMine',
  subSelector: 'span.metalMine >span.level',
  attribute: 'data-value',
};

export const CrystalMine: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'crystalMine',
  label: 'Crystal Mine',
  selector: 'span.crystalMine',
  subSelector: 'span.crystalMine >span.level',
  attribute: 'data-value',
};

export const DeuteriumSynthesizer: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'deuteriumSynthesizer',
  label: 'Deuterium Synthesizer',
  selector: 'span.deuteriumSynthesizer',
  subSelector: 'span.deuteriumSynthesizer >span.level',
  attribute: 'data-value',
};

export const metalStorage: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'metalStorage',
  label: 'metalStorage',
  selector: 'span.metalStorage',
  subSelector: 'span.metalStorage >span.level',
  attribute: 'data-value',
};

export const crystalStorage: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'crystalStorage',
  label: 'Crystal Storage',
  selector: 'span.crystalStorage',
  subSelector: 'span.crystalStorage >span.level',
  attribute: 'data-value',
};

export const deuteriumStorage: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'deuteriumStorage',
  label: 'Deuterium Storage',
  selector: 'span.deuteriumStorage',
  subSelector: 'span.deuteriumStorage >span.level',
  attribute: 'data-value',
};

export const SolarPlant: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'solarPlant',
  label: 'Solar Plant',
  selector: 'span.solarPlant',
  subSelector: 'span.solarPlant >span.level',
  attribute: 'data-value',
};

export const FusionPlant: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'fusionPlant',
  label: 'Fusion Plant',
  selector: 'span.fusionPlant',
  subSelector: 'span.fusionPlant >span.level',
  attribute: 'data-value',
};

export const PlanetSupplies = {
  MetalMine,
  CrystalMine,
  DeuteriumSynthesizer,
  metalStorage,
  crystalStorage,
  deuteriumStorage,
  SolarPlant,
  FusionPlant,
};

export default PlanetSupplies;
