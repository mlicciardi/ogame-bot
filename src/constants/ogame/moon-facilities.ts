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

export const Moonbase: IOGameEntity = {
  type: 'level',
  key: 'moonbase',
  selector: 'span.moonbase',
  label: 'Moonbase',
};

export const SensorPhalanx: IOGameEntity = {
  type: 'level',
  key: 'sensorPhalanx',
  selector: 'span.sensorPhalanx',
  label: 'Sensor Phalanx',
};

export const JumpGate: IOGameEntity = {
  type: 'level',
  key: 'jumpGate',
  selector: 'span.jumpGate',
  label: 'Jump Gate',
};

export const MoonFacilities = {
  RoboticsFactory,
  Shipyard,
  Moonbase,
  SensorPhalanx,
  JumpGate,
};

export default MoonFacilities;
