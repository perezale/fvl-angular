import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './add-match/add-match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full',
  },
  { path: 'teams', component: TeamListComponent },
  { path: 'matchs', component: MatchListComponent },
  { path: 'matchs/add', component: AddMatchComponent },
  { path: 'matchs/:id/update', component: AddMatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
