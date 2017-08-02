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


import { GoogleService } from './shared/google.service';
import { WindowRefService } from './shared/window-ref.service';
import { SignInButtonComponent } from './home-page/sign-in-button/sign-in-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomePageComponent,
    SignInButtonComponent
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
    GoogleService,
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
