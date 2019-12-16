import { OGameEntityType } from '@app/types/ogame';

export interface IOGameEntity {
  type: OGameEntityType;
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
