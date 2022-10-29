import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from './team';
import { TeamDataService } from './team-data.service';

@Injectable({
  providedIn: 'root',
})
export class TeamModalService {
  teamData = new BehaviorSubject<Team | null>(null);

  constructor(private teamDataService: TeamDataService) {}

  setTeam(id: number) {
    this.teamDataService
      .getOneById(id)
      .subscribe((data) => this.teamData.next(data));
  }
}
