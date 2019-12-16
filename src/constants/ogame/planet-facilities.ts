import { IOGameEntity } from '@app/interfaces/ogame';
import { OGameEntityType } from '@app/constants/ogame/types';

export const RoboticsFactory: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'roboticsFactory',
  label: 'Robotics Factory',
  selector: 'span.roboticsFactory',
  subSelector: 'span.roboticsFactory >span.level',
  attribute: 'data-value',
};

export const Shipyard: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'shipyard',
  label: 'Shipyard',
  selector: 'span.shipyard',
  subSelector: 'span.shipyard >span.level',
  attribute: 'data-value',
};

export const ResearchLaboratory: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'researchLaboratory',
  label: 'Research Laboratory',
  selector: 'span.researchLaboratory',
  subSelector: 'span.researchLaboratory >span.level',
  attribute: 'data-value',
};

export const AllianceDepot: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'allianceDepot',
  label: 'Alliance Depot',
  selector: 'span.allianceDepot',
  subSelector: 'span.allianceDepot >span.level',
  attribute: 'data-value',
};

export const MissileSilo: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'missileSilo',
  label: 'Missile Silo',
  selector: 'span.missileSilo',
  subSelector: 'span.missileSilo >span.level',
  attribute: 'data-value',
};

export const NaniteFactory: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'naniteFactory',
  label: 'Nanite Factory',
  selector: 'span.naniteFactory',
  subSelector: 'span.naniteFactory >span.level',
  attribute: 'data-value',
};

export const Terraformer: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'terraformer',
  label: 'Terraformer',
  selector: 'span.terraformer',
  subSelector: 'span.terraformer >span.level',
  attribute: 'data-value',
};

export const RepairDock: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'repairDock',
  label: 'Repair Dock',
  selector: 'span.repairDock',
  subSelector: 'span.repairDock >span.level',
  attribute: 'data-value',
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
