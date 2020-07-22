import { MapObject } from './map-object';

export const OBJECTS: MapObject[] = [
  {
    type: 'desk',
    isWorkPlace: true,
    isActive: true,
    icon: 'fa-desktop',
    tooltip: 'Working desk',
  },
  {
    type: 'constant',
    isWorkPlace: false,
    isActive: true,
    icon: 'fa-id-badge',
    tooltip: 'Constant desk',
  },
  {
    type: 'meetingRoom',
    isWorkPlace: true,
    isActive: true,
    icon: 'fa-chalkboard-teacher',
    tooltip: 'Meeting room',
  },
  {
    type: 'kitchen',
    isWorkPlace: false,
    isActive: true,
    icon: 'fa-utensils',
    tooltip: 'Kitchen',
  },
  {
    type: 'toilet',
    isWorkPlace: false,
    isActive: true,
    icon: 'fa-restroom',
    tooltip: 'Toilet',
  },
  {
    type: 'door',
    isWorkPlace: false,
    isActive: false,
    icon: 'fa-door-closed',
    tooltip: 'Door',
  },
  {
    type: 'window',
    isWorkPlace: false,
    isActive: false,
    icon: 'fa-border-all',
    tooltip: 'Window',
  },
];
