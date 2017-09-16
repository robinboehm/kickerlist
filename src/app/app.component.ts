import { Component } from '@angular/core';
import {GameService} from "./game/game.service";
import {Team} from "./team";

@Component({
  selector: 'kickertable-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public game: GameService){}

  handleTeamWon(team: Team){
    this.game.handleTeamWon(team);
  }

}
