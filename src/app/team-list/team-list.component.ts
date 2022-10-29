import { Component, NgModule, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamDataService } from '../team-data.service';
import { TeamModalService } from '../team-modal.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  teamsData: Team[] = [];

  constructor(
    private teamsDataService: TeamDataService,
    private teamModalService: TeamModalService
  ) {}

  ngOnInit(): void {
    this.teamsDataService
      .getAll()
      .subscribe((teams) => (this.teamsData = teams));
  }

  showTeam(id: number) {
    this.teamModalService.setTeam(id);
  }
}
