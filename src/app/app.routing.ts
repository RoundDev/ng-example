import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';

import { TeamsComponent } from './teams/teams.component';
import { teamsRoutes } from './teams/teams.routing';

import { PlayersComponent } from './players/players.component';
import { playersRoutes } from './players/players.routing';
import { FormExampleComponent } from './form-example/form-example.component';
//use app.routing to set your home component for the E
const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'teams',
        component: TeamsComponent,
        children: teamsRoutes
    },
    {
        path: 'players',
        component: PlayersComponent,
        children: playersRoutes
    },
    {
        path: 'form-example',
        component: FormExampleComponent
    }
]


export const appRoutingProviders: any[] = [
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
