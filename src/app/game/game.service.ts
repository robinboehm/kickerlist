import {Injectable} from '@angular/core';
import {Team} from "../team";

@Injectable()
export class GameService {

  private activeTeams: Team[] = [
    {name: 'Robin'},
    {name: 'Team A'}
  ];
  private waitingTeams: Team[] = [
    {name: 'TeamB'},
    {name: 'TeamC'},
    {name: 'TeamD'},
    {name: 'TeamE'},
    {name: 'TeamF'},
  ];

  constructor() {
  }

}
