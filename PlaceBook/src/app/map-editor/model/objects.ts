import { MapObject } from './map-object';

export const OBJECTS: MapObject[] = [
  { type: 'coWorking', isWorkPlace: true, isActive: true, icon: 'fa-desktop' },
  { type: 'kitchen', isWorkPlace: false, isActive: false, icon: 'fa-utensils' },
  { type: 'toilet', isWorkPlace: false, isActive: false, icon: 'fa-restroom' },
  { type: 'door', isWorkPlace: false, isActive: false, icon: 'fa-door-closed' },
  {
    type: 'window',
    isWorkPlace: false,
    isActive: false,
    icon: 'fa-border-all',
  },
];
