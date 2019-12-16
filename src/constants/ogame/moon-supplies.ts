import { IOGameEntity } from '@app/interfaces/ogame';

export const MetalMine: IOGameEntity = {
  type: 'level',
  key: 'metalMine',
  selector: 'span.metalMine',
  label: 'Metal Mine',
};

export const CrystalMine: IOGameEntity = {
  type: 'level',
  key: 'crystalMine',
  selector: 'span.crystalMine',
  label: 'Crystal Mine',
};

export const DeuteriumSynthesizer: IOGameEntity = {
  type: 'level',
  key: 'deuteriumSynthesizer',
  selector: 'span.deuteriumSynthesizer',
  label: 'Deuterium Synthesizer',
};

export const metalStorage: IOGameEntity = {
  type: 'level',
  key: 'metalStorage',
  selector: 'span.metalStorage',
  label: 'metalStorage',
};

export const crystalStorage: IOGameEntity = {
  type: 'level',
  key: 'crystalStorage',
  selector: 'span.crystalStorage',
  label: 'Crystal Storage',
};

export const deuteriumStorage: IOGameEntity = {
  type: 'level',
  key: 'deuteriumStorage',
  selector: 'span.deuteriumStorage',
  label: 'Deuterium Storage',
};

export const SolarPlant: IOGameEntity = {
  type: 'level',
  key: 'solarPlant',
  selector: 'span.solarPlant',
  label: 'Solar Plant',
};

export const FusionPlant: IOGameEntity = {
  type: 'level',
  key: 'fusionPlant',
  selector: 'span.fusionPlant',
  label: 'Fusion Plant',
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

export const MoonSupplies = {
  MetalMine,
  CrystalMine,
  DeuteriumSynthesizer,
  metalStorage,
  crystalStorage,
  deuteriumStorage,
  SolarPlant,
  FusionPlant,
  SolarSatellite,
};

export default MoonSupplies;
