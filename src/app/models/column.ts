export interface Column {
  id: string;
  label?: string;
  field?: string;
  type?: string;
  width?: string;
  tooltip?: string;
  disableSorting?: boolean;
}

export enum ColumnId {
  dateStart = 'DATE_START',
  dateEnd = 'DATE_END',
  placeNumber = 'PLACE_NUMBER',
  country = 'COUNTRY',
  city = 'CITY',
  office = 'ADDRESS',
  userName = 'USER_NAME',
  userSurname = 'USER_SURNAME',
  userPhoto = 'PHOTO',
}
