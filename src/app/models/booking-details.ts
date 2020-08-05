import { OfficeAddress } from './office-address';
import { BookingMark } from './booking-mark';

export interface BookingDetails {
  id: number;
  placeInfo: string;
  userId: number;
  userName: string;
  userSurname: string;
  photoUrl: string;
  markSubmitDto: BookingMark;
  address: OfficeAddress;
  timeStart: string;
  timeEnd: string;
  status: string;
}
