import { BookingMark } from './booking-mark';
import { OfficeAddress } from './office-address';

export interface Booking {
  id: number;
  placeNumber: string;
  userName: string;
  userSurname: string;
  marks?: BookingMark;
  address: OfficeAddress;
  timeStart: string;
  timeEnd: string;
  status: string;
}
