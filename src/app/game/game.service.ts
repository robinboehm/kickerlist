import {Injectable} from '@angular/core';
import {Team} from "../team";

@Injectable()
export class GameService {

  private activeTeams: Team[] = [
    {name: 'Andreas W. & Martin Y.'},
    {name: 'Christina & Max'}
  ];
  private waitingTeams: Team[] = [
    {name: 'Moritz & Andre'},
    {name: 'Mira & Leo'},
    {name: 'Mocki & Andreas'},
    {name: 'Marcel & Sebastian W.'},
    {name: 'Thorsten & Flo'},
  ];

  private lastTeamNames: string[] = [
    'Moritz & Andre',
    'Mira & Leo',
    'Mocki & Andreas',
    'Marcel & Sebastian W',
    'Thorsten & Flo',
    'Moritz & Andre',
    'Mira & Leo',
    'Mocki & Andreas',
    'Marcel & Sebastian W',
    'Thorsten & Flo',
  ];

  constructor() {
  }

  addTeam(name: string) {
    this.waitingTeams.push({name});

    // Add name to already quickchoose list
    if (this.lastTeamNames.indexOf(name) === -1) {
      this.lastTeamNames.unshift(name);
    }
  }

  handleTeamWon(team: Team) {
    for (let i = 0; i < this.activeTeams.length; i++) {
      if (this.activeTeams[i] !== team) {
        this.activeTeams[i] = this.nextTeam();
      }
    }
  }

  getLastTeamNames() {
    return this.lastTeamNames;
  }

  nextTeam() {
    return this.waitingTeams.shift();
  }
}
