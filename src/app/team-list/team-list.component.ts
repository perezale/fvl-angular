import { Component, NgModule, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamDataService } from '../team-data.service';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  teamsData: Team[] = [];

  constructor(private teamsDataService: TeamDataService) {}

  ngOnInit(): void {
    this.teamsDataService
      .getAll()
      .subscribe((teams) => (this.teamsData = teams));
  }
}
