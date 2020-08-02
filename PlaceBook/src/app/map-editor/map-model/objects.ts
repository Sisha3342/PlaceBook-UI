import { MapObject } from './map-object';

export const OBJECTS: MapObject[] = [
  {
    type: 'desk',
    active: true,
    icon: 'fa-desktop',
    tooltip: 'Working desk',
    number: 0,
  },
  {
    type: 'constant',
    active: true,
    icon: 'fa-id-badge',
    tooltip: 'Constant desk',
    number: 0,
  },
  {
    type: 'meetingRoom',
    active: true,
    icon: 'fa-chalkboard-teacher',
    tooltip: 'Meeting room',
    number: 0,
    capacity: 1,
  },
  {
    type: 'kitchen',
    active: true,
    icon: 'fa-utensils',
    tooltip: 'Kitchen',
  },
  {
    type: 'toilet',
    active: true,
    icon: 'fa-restroom',
    tooltip: 'Toilet',
  },
  {
    type: 'door',
    active: true,
    icon: 'fa-door-closed',
    tooltip: 'Door',
  },
  {
    type: 'window',
    active: true,
    icon: 'fa-border-all',
    tooltip: 'Window',
  },
];
