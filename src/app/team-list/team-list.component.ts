import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../team";

@Component({
  selector: 'team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() waitingTeams: Team[];

  constructor() { }

  ngOnInit() {
  }

}
