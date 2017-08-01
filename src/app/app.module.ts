import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routing, appRoutingProviders } from './app.routing';

import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';


import { GoogleService } from './google.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    RouterModule,
    PlayersModule,
    TeamsModule
  ],
  providers: [
    appRoutingProviders,
    GoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
