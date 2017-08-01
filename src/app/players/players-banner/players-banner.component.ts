import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../shared/models/player';

@Component({
  selector: 'app-players-banner',
  templateUrl: './players-banner.component.html',
  styleUrls: ['./players-banner.component.css']
})
export class PlayersBannerComponent implements OnInit {
  @Input()
  player: Player;


  constructor() { }

  ngOnInit() {
  }

}
