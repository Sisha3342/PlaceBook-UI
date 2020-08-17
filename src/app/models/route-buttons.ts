export type RouteButton = {
  name: string;
  route: string;
  iconType: string;
  setType: string;
};

export const myBookingsButton: RouteButton = {
  name: 'Bookings',
  route: '/my_bookings',
  iconType: 'fa-list',
  setType: 'fas',
};

export const employeesBookingsButton: RouteButton = {
  name: 'Employees bookings',
  route: '/employees_bookings',
  iconType: 'fa-address-book',
  setType: 'far',
};

export const employeesButton: RouteButton = {
  name: 'Employees',
  route: '/employees',
  iconType: 'fa-user-friends',
  setType: 'fas',
};

export const myMapsButton: RouteButton = {
  name: 'Maps',
  route: '/my_maps',
  iconType: 'fa-map',
  setType: 'fas',
};
