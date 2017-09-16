import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ActiveTeamsComponent } from './active-teams/active-teams.component';
import {GameService} from "./game/game.service";

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    ActiveTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
