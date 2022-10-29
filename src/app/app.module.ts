import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MatchListComponent } from './match-list/match-list.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TeamListComponent,
    MatchListComponent,
    DetailBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
