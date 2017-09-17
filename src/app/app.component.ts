import {Component, OnInit} from '@angular/core';
import {GameService} from "./game/game.service";
import {Team} from "./team";

@Component({
  selector: 'kickertable-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  name: string = "";
  lastTeamNames: string[] = [];

  constructor(public game: GameService) {
  }

  ngOnInit() {
    this.lastTeamNames = this.game.getLastTeamNames();
  }

  handleTeamWon(team: Team) {
    this.game.handleTeamWon(team);
  }

  addTeam(name: string) {
    this.name = "";
    this.game.addTeam(name);
  }

  setName(name: string){
    this.name = name;
  }

}
