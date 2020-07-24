import { MapObject } from './map-object';

export const OBJECTS: MapObject[] = [
  {
    type: 'desk',
    isActive: true,
    icon: 'fa-desktop',
    tooltip: 'Working desk',
    number: 0,
  },
  {
    type: 'constant',
    isActive: true,
    icon: 'fa-id-badge',
    tooltip: 'Constant desk',
    number: 0,
  },
  {
    type: 'meetingRoom',
    isActive: true,
    icon: 'fa-chalkboard-teacher',
    tooltip: 'Meeting room',
    number: 0,
    capacity: 0,
  },
  {
    type: 'kitchen',
    isActive: true,
    icon: 'fa-utensils',
    tooltip: 'Kitchen',
  },
  {
    type: 'toilet',
    isActive: true,
    icon: 'fa-restroom',
    tooltip: 'Toilet',
  },
  {
    type: 'door',
    isActive: false,
    icon: 'fa-door-closed',
    tooltip: 'Door',
  },
  {
    type: 'window',
    isActive: false,
    icon: 'fa-border-all',
    tooltip: 'Window',
  },
];
