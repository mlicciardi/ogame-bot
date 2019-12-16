import { IEntity } from '@app/interfaces/common';

export interface IShipyard {
  fighterLight: IShip;
  fighterHeavy: IShip;
  cruiser: IShip;
  battleship: IShip;
  battlecruiser: IShip;
  bomber: IShip;
  destroyer: IShip;
  deathstar: IShip;
  reaper: IShip;
  pathfinder: IShip;
  transporterSmall: IShip;
  transporterLarge: IShip;
  colonyShip: IShip;
  recycler: IShip;
  espionageProbe: IShip;
  solarSatellite: IShip;
  crawler: IShip;
}
export interface IShip {
  _t: IEntity;
  amount: number;
}
