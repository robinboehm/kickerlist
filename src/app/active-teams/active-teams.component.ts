import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Team} from "../team";

@Component({
  selector: 'active-teams',
  templateUrl: './active-teams.component.html',
  styleUrls: ['./active-teams.component.css']
})
export class ActiveTeamsComponent implements OnInit {

  @Input() activeTeams: Team[] = [];
  @Output() teamWon: EventEmitter<Team> = new EventEmitter<Team>();

  constructor() { }

  ngOnInit() {
  }

  triggerTeamWon(team:Team){
    this.teamWon.emit(team);
  }

}
