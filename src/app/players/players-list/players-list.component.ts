import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../../shared/models/player';
import { Router } from "@angular/router";
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Player[];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.players = this.playersService.getAllPlayers();
  }

  choosePlayer(id: number){
    this.router.navigateByUrl('players/player/'+id);
  }

}
