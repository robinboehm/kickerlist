import { Component } from '@angular/core';
import {GameService} from "./game/game.service";

@Component({
  selector: 'kickertable-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public game: GameService){}

}
