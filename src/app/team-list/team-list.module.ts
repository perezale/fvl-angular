import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';

@NgModule({
  declarations: [TeamListComponent],
  exports: [TeamListComponent],
  imports: [CommonModule],
})
export class TeamListModule {}
