import { OGameEntityType } from '@app/types/ogame';

export interface IOGameEntity {
  type: OGameEntityType;
  key: string;
  selector: string;
  label: string;
  requiredMetal?: number;
  requiredCrystal?: number;
  requiredDeuterium?: number;
}
