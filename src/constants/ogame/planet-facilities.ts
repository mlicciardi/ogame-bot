import { IEntity } from '@app/interfaces/common';
import { OGameEntityType } from '@app/constants/ogame/entity-types';

export const RoboticsFactory: IEntity = {
  type: OGameEntityType.Level,
  key: 'roboticsFactory',
  label: 'Robotics Factory',
  selector: 'span.roboticsFactory',
  subSelector: 'span.roboticsFactory >span.level',
  attribute: 'data-value',
};

export const Shipyard: IEntity = {
  type: OGameEntityType.Level,
  key: 'shipyard',
  label: 'Shipyard',
  selector: 'span.shipyard',
  subSelector: 'span.shipyard >span.level',
  attribute: 'data-value',
};

export const ResearchLaboratory: IEntity = {
  type: OGameEntityType.Level,
  key: 'researchLaboratory',
  label: 'Research Laboratory',
  selector: 'span.researchLaboratory',
  subSelector: 'span.researchLaboratory >span.level',
  attribute: 'data-value',
};

export const AllianceDepot: IEntity = {
  type: OGameEntityType.Level,
  key: 'allianceDepot',
  label: 'Alliance Depot',
  selector: 'span.allianceDepot',
  subSelector: 'span.allianceDepot >span.level',
  attribute: 'data-value',
};

export const MissileSilo: IEntity = {
  type: OGameEntityType.Level,
  key: 'missileSilo',
  label: 'Missile Silo',
  selector: 'span.missileSilo',
  subSelector: 'span.missileSilo >span.level',
  attribute: 'data-value',
};

export const NaniteFactory: IEntity = {
  type: OGameEntityType.Level,
  key: 'naniteFactory',
  label: 'Nanite Factory',
  selector: 'span.naniteFactory',
  subSelector: 'span.naniteFactory >span.level',
  attribute: 'data-value',
};

export const Terraformer: IEntity = {
  type: OGameEntityType.Level,
  key: 'terraformer',
  label: 'Terraformer',
  selector: 'span.terraformer',
  subSelector: 'span.terraformer >span.level',
  attribute: 'data-value',
};

export const RepairDock: IEntity = {
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
