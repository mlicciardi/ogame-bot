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

export const Moonbase: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'moonbase',
  label: 'Moonbase',
  selector: 'span.moonbase',
  subSelector: 'span.moonbase >span.level',
  attribute: 'data-value',
};

export const SensorPhalanx: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'sensorPhalanx',
  label: 'Sensor Phalanx',
  selector: 'span.sensorPhalanx',
  subSelector: 'span.sensorPhalanx >span.level',
  attribute: 'data-value',
};

export const JumpGate: IOGameEntity = {
  type: OGameEntityType.Level,
  key: 'jumpGate',
  label: 'Jump Gate',
  selector: 'span.jumpGate',
  subSelector: 'span.jumpGate >span.level',
  attribute: 'data-value',
};

export const MoonFacilities = {
  RoboticsFactory,
  Shipyard,
  Moonbase,
  SensorPhalanx,
  JumpGate,
};

export default MoonFacilities;
