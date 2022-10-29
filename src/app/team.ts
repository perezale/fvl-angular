import { Match } from './match';

export interface Team {
  id: number;
  name: string;
  short_name: string;
  country: string;
  location: string;
  matchsLocal?: Match[];
  matchsVisitante?: Match[];
}
