import { OfficeAddress } from '../../models/office-address';

export interface Office {
  id: number;
  address: OfficeAddress;
  worktimeStart: string;
  worktimeEnd: string;
}
