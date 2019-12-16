import { EntityType } from '@app/types/ogame';

import { IDefence } from '@app/interfaces/defence';
import { IShipyard } from '@app/interfaces/shipyard';
import { IFleet } from '@app/interfaces/fleet';

export interface IEntity {
  type: EntityType;
  key: string;
  label: string;
  selector: string;
  subSelector: string;
  attribute: string;
  inputSelector?: string;
  requiredMetal?: number;
  requiredCrystal?: number;
  requiredDeuterium?: number;
}
export interface IEmpire {
  all: Array<IPlanet | IMoon>;
  planets: Array<IPlanet>;
  moons: Array<IMoon>;
}
export interface IPlanet {
  supplies: IPlanetSupplies;
  facilities: IPlanetFacilities;

  defence: IDefence;
  shipyard: IShipyard;
  fleet: IFleet;
}
export interface IPlanetSupplies {}
export interface IPlanetFacilities {}
export interface IMoon {
  supplies: IMoonSupplies;
  facilities: IMoonFacilities;

  defence: IDefence;
  shipyard: IShipyard;
  fleet: IFleet;
}
export interface IMoonSupplies {}
export interface IMoonFacilities {}
