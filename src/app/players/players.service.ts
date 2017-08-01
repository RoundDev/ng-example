import { Injectable } from '@angular/core';
import { MockPlayers } from '../shared/mocks/Players';
import { Player } from '../shared/models/player';
import * as _ from 'lodash';

@Injectable()
export class PlayersService {

  constructor() { }


  getAllPlayers(): Player[] {
    return MockPlayers;
  }

  getPlayerById(id: number): Player {
    let tmpPlayer: Player = _.find(MockPlayers, (player) => {return player.id == id})
    return tmpPlayer;
  }

}
