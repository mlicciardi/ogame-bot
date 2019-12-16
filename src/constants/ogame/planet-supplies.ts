export type PlanetSupplyType = 'level' | 'number';

export interface IPlanetSupply {
  type: PlanetSupplyType;
  key: string;
  selector: string;
  label: string;
}

export const MetalMine: IPlanetSupply = {
  type: 'level',
  key: 'metalMine',
  selector: 'span.metalMine',
  label: 'Metal Mine',
};

export const CrystalMine: IPlanetSupply = {
  type: 'level',
  key: 'crystalMine',
  selector: 'span.crystalMine',
  label: 'Crystal Mine',
};

export const DeuteriumSynthesizer: IPlanetSupply = {
  type: 'level',
  key: 'deuteriumSynthesizer',
  selector: 'span.deuteriumSynthesizer',
  label: 'Deuterium Synthesizer',
};

export const metalStorage: IPlanetSupply = {
  type: 'level',
  key: 'metalStorage',
  selector: 'span.metalStorage',
  label: 'metalStorage',
};

export const crystalStorage: IPlanetSupply = {
  type: 'level',
  key: 'crystalStorage',
  selector: 'span.crystalStorage',
  label: 'Crystal Storage',
};

export const deuteriumStorage: IPlanetSupply = {
  type: 'level',
  key: 'deuteriumStorage',
  selector: 'span.deuteriumStorage',
  label: 'Deuterium Storage',
};

export const SolarPlant: IPlanetSupply = {
  type: 'level',
  key: 'solarPlant',
  selector: 'span.solarPlant',
  label: 'Solar Plant',
};

export const FusionPlant: IPlanetSupply = {
  type: 'level',
  key: 'fusionPlant',
  selector: 'span.fusionPlant',
  label: 'Fusion Plant',
};

export const SolarSatellite: IPlanetSupply = {
  type: 'number',
  key: 'solarSatellite',
  selector: 'span.solarSatellite',
  label: 'Solar Satellite',
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
  SolarSatellite,
};

export default PlanetSupplies;
