import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchDataService } from '../match-data.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit {
  matchsData: Match[] = [];
  flagsEndpoint = 'https://flagcdn.com/h40';

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit(): void {
    this.matchDataService
      .getAll()
      .subscribe((matchs) => (this.matchsData = matchs));
  }
}
