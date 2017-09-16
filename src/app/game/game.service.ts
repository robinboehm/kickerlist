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

  addTeam(name:string){
    this.waitingTeams.push({name});
  }

  handleTeamWon(team: Team) {
    for(let i=0;i<this.activeTeams.length;i++){
      if(this.activeTeams[i] !== team){
        this.activeTeams[i] = this.waitingTeams.shift();
      }
    }
  }
}
