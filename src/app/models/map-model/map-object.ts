import { Type } from './Type';
import { Border } from './Border';

export interface MapObject {
  type: Type;
  active: boolean;
  icon: string;
  tooltip: string;
  number?: string;
  capacity?: number;
  border?: Border;
}
