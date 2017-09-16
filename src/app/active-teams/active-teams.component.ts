import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../team";

@Component({
  selector: 'active-teams',
  templateUrl: './active-teams.component.html',
  styleUrls: ['./active-teams.component.css']
})
export class ActiveTeamsComponent implements OnInit {

  @Input() activeTeams: Team[];

  constructor() { }

  ngOnInit() {
  }

}
