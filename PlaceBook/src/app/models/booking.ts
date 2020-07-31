import { OfficeAddress } from './office-address';
import { BookingMark } from './booking-mark';

export interface Booking {
  id: number;
  placeNumber: string;
  userName: string;
  userSurname: string;
  address: OfficeAddress;
  timeStart: string;
  timeEnd: string;
  status: string;
  marks?: BookingMark;
}
