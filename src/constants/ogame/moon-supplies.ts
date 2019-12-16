import { IEntity } from '@app/interfaces/common';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const MetalMine: IEntity = {
  type: OGameEntityType.Level,
  key: 'metalMine',
  label: 'Metal Mine',
  selector: 'span.metalMine',
  subSelector: 'span.metalMine >span.level',
  attribute: 'data-value',
};

export const CrystalMine: IEntity = {
  type: OGameEntityType.Level,
  key: 'crystalMine',
  label: 'Crystal Mine',
  selector: 'span.crystalMine',
  subSelector: 'span.crystalMine >span.level',
  attribute: 'data-value',
};

export const DeuteriumSynthesizer: IEntity = {
  type: OGameEntityType.Level,
  key: 'deuteriumSynthesizer',
  label: 'Deuterium Synthesizer',
  selector: 'span.deuteriumSynthesizer',
  subSelector: 'span.deuteriumSynthesizer >span.level',
  attribute: 'data-value',
};

export const metalStorage: IEntity = {
  type: OGameEntityType.Level,
  key: 'metalStorage',
  label: 'metalStorage',
  selector: 'span.metalStorage',
  subSelector: 'span.metalStorage >span.level',
  attribute: 'data-value',
};

export const crystalStorage: IEntity = {
  type: OGameEntityType.Level,
  key: 'crystalStorage',
  label: 'Crystal Storage',
  selector: 'span.crystalStorage',
  subSelector: 'span.crystalStorage >span.level',
  attribute: 'data-value',
};

export const deuteriumStorage: IEntity = {
  type: OGameEntityType.Level,
  key: 'deuteriumStorage',
  label: 'Deuterium Storage',
  selector: 'span.deuteriumStorage',
  subSelector: 'span.deuteriumStorage >span.level',
  attribute: 'data-value',
};

export const SolarPlant: IEntity = {
  type: OGameEntityType.Level,
  key: 'solarPlant',
  label: 'Solar Plant',
  selector: 'span.solarPlant',
  subSelector: 'span.solarPlant >span.level',
  attribute: 'data-value',
};

export const FusionPlant: IEntity = {
  type: OGameEntityType.Level,
  key: 'fusionPlant',
  label: 'Fusion Plant',
  selector: 'span.fusionPlant',
  subSelector: 'span.fusionPlant >span.level',
  attribute: 'data-value',
};

export const MoonSupplies = {
  MetalMine,
  CrystalMine,
  DeuteriumSynthesizer,
  metalStorage,
  crystalStorage,
  deuteriumStorage,
  SolarPlant,
  FusionPlant,
};

export default MoonSupplies;
