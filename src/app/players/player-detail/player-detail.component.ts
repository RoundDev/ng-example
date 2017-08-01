import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/models/player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnDestroy {

  playerId: number;
  private sub: any;
  player: Player;
  constructor(private route: ActivatedRoute, private playersService: PlayersService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.playerId = +params['id'];
      this.player = this.playersService.getPlayerById(this.playerId);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
