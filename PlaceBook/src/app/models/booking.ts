import { OfficeAddress } from './office-address';

export interface Booking {
  id: number;
  userId: number;
  photoUrl: string;
  placeNumber: string;
  userName: string;
  userSurname: string;
  address: OfficeAddress;
  timeStart: string;
  timeEnd: string;
  status: string;
}
