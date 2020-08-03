import { OfficeAddress } from './office-address';

export interface Office {
  id: number;
  address: OfficeAddress;
  worktimeStart: string;
  worktimeEnd: string;
  deleted: boolean;
}
