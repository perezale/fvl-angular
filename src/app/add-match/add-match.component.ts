import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchDataService } from '../match-data.service';
import { Team } from '../team';
import { TeamDataService } from '../team-data.service';
import { NewMatchDto } from './match.dto';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
})
export class AddMatchComponent implements OnInit {
  data: NewMatchDto = {
    local: 0,
    sets_local: 0,
    visitante: 0,
    sets_visitante: 0,
  };
  teamList: Team[];

  constructor(
    private teamDataService: TeamDataService,
    private matchDataService: MatchDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teamDataService.getAll().subscribe((data) => (this.teamList = data));
  }

  create(data: NewMatchDto) {
    this.matchDataService
      .addMatch(data)
      .subscribe(() => this.router.navigate(['/matchs']));
  }
}
