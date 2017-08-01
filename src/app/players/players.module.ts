import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersBannerComponent } from './players-banner/players-banner.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayersService } from './players.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PlayersComponent, PlayersListComponent, PlayersBannerComponent, PlayerDetailComponent],
  providers: [PlayersService]
})
export class PlayersModule { }
