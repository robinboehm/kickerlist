import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ActiveTeamsComponent } from './active-teams/active-teams.component';
import {GameService} from "./game/game.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    ActiveTeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
