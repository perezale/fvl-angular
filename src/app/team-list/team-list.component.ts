import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  teamsArray: Team[] = [
    {
      id: 1,
      country: 'AR',
      location: 'San Juan',
      name: 'UPCN Voley',
      short_name: 'UPCN',
    },
    {
      id: 2,
      country: 'IT',
      location: 'Rome',
      name: 'Lube Volley',
      short_name: 'LUB',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
