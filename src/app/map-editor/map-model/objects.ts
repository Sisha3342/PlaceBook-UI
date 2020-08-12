import { MapObject } from './map-object';
import { Type } from './Type';

export const OBJECTS: MapObject[] = [
  {
    type: Type.desk,
    active: true,
    icon: 'fa-desktop',
    tooltip: 'Working desk',
    number: '0',
  },
  {
    type: Type.constant,
    active: true,
    icon: 'fa-id-badge',
    tooltip: 'Constant desk',
    number: '0',
  },
  {
    type: Type.meeting,
    active: true,
    icon: 'fa-chalkboard-teacher',
    tooltip: 'Meeting room',
    number: '0',
    capacity: 1,
  },
  {
    type: Type.kitchen,
    active: true,
    icon: 'fa-utensils',
    tooltip: 'Kitchen',
  },
  {
    type: Type.toilet,
    active: true,
    icon: 'fa-restroom',
    tooltip: 'Toilet',
  },
  {
    type: Type.door,
    active: true,
    icon: 'fa-door-closed',
    tooltip: 'Door',
    border: undefined,
  },
  {
    type: Type.window,
    active: true,
    icon: 'fa-border-all',
    tooltip: 'Window',
    border: undefined,
  },
];
