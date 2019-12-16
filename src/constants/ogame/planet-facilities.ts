export type PlanetFacilityType = 'level' | 'number';

export interface IPlanetFacility {
  type: PlanetFacilityType;
  key: string;
  selector: string;
  label: string;
}

export const RoboticsFactory: IPlanetFacility = {
  type: 'level',
  key: 'roboticsFactory',
  selector: 'span.roboticsFactory',
  label: 'Robotics Factory',
};

export const Shipyard: IPlanetFacility = {
  type: 'level',
  key: 'shipyard',
  selector: 'span.shipyard',
  label: 'Shipyard',
};

export const ResearchLaboratory: IPlanetFacility = {
  type: 'level',
  key: 'researchLaboratory',
  selector: 'span.researchLaboratory',
  label: 'Research Laboratory',
};

export const AllianceDepot: IPlanetFacility = {
  type: 'level',
  key: 'allianceDepot',
  selector: 'span.allianceDepot',
  label: 'Alliance Depot',
};

export const MissileSilo: IPlanetFacility = {
  type: 'level',
  key: 'missileSilo',
  selector: 'span.missileSilo',
  label: 'Missile Silo',
};

export const NaniteFactory: IPlanetFacility = {
  type: 'level',
  key: 'naniteFactory',
  selector: 'span.naniteFactory',
  label: 'Nanite Factory',
};

export const Terraformer: IPlanetFacility = {
  type: 'level',
  key: 'terraformer',
  selector: 'span.terraformer',
  label: 'Terraformer',
};

export const RepairDock: IPlanetFacility = {
  type: 'level',
  key: 'repairDock',
  selector: 'span.repairDock',
  label: 'Repair Dock',
};

export const PlanetFacilities = {
  RoboticsFactory,
  Shipyard,
  ResearchLaboratory,
  AllianceDepot,
  MissileSilo,
  NaniteFactory,
  Terraformer,
  RepairDock,
};

export default PlanetFacilities;
