import { IOGameEntity } from '@app/interfaces/ogame';

export const RoboticsFactory: IOGameEntity = {
  type: 'level',
  key: 'roboticsFactory',
  selector: 'span.roboticsFactory',
  label: 'Robotics Factory',
};

export const Shipyard: IOGameEntity = {
  type: 'level',
  key: 'shipyard',
  selector: 'span.shipyard',
  label: 'Shipyard',
};

export const ResearchLaboratory: IOGameEntity = {
  type: 'level',
  key: 'researchLaboratory',
  selector: 'span.researchLaboratory',
  label: 'Research Laboratory',
};

export const AllianceDepot: IOGameEntity = {
  type: 'level',
  key: 'allianceDepot',
  selector: 'span.allianceDepot',
  label: 'Alliance Depot',
};

export const MissileSilo: IOGameEntity = {
  type: 'level',
  key: 'missileSilo',
  selector: 'span.missileSilo',
  label: 'Missile Silo',
};

export const NaniteFactory: IOGameEntity = {
  type: 'level',
  key: 'naniteFactory',
  selector: 'span.naniteFactory',
  label: 'Nanite Factory',
};

export const Terraformer: IOGameEntity = {
  type: 'level',
  key: 'terraformer',
  selector: 'span.terraformer',
  label: 'Terraformer',
};

export const RepairDock: IOGameEntity = {
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
