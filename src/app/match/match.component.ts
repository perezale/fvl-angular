import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchDataService } from '../match-data.service';
import { Team } from '../team';
import { TeamDataService } from '../team-data.service';
import { NewMatchDto } from './match.dto';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  data: NewMatchDto = {
    id: null,
    local: 0,
    sets_local: 0,
    visitante: 0,
    sets_visitante: 0,
  };

  teamList: Team[];

  constructor(
    private teamDataService: TeamDataService,
    private matchDataService: MatchDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teamDataService.getAll().subscribe((data) => (this.teamList = data));
    this.route.params.subscribe(({ id }) => {
      if (!id) return;
      this.matchDataService.getById(id).subscribe((match) => {
        this.data.id = match.id;
        this.data.local = match.local.id;
        this.data.visitante = match.visitante.id;
        this.data.sets_local = match.sets_local;
        this.data.sets_visitante = match.sets_visitante;
      });
    });
  }

  create(data: NewMatchDto) {
    this.matchDataService
      .addMatch(data)
      .subscribe(() => this.router.navigate(['/matchs']));
  }

  update(data: NewMatchDto) {
    this.matchDataService
      .updateMatch(data)
      .subscribe(() => this.router.navigate(['/matchs']));
  }
}
