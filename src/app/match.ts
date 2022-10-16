import { Team } from './team';

export interface Match {
  id: number;
  local: Team;
  visitante: Team;
  sets_local: number;
  sets_visitante: number;
}
