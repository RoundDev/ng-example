import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TeamsListComponent } from './teams-list/teams-list.component';

export const teamsRoutes: Routes = [
    {
        path: '',
        component: TeamsListComponent
    },
    {
        path: 'teams-list',
        component: TeamsListComponent
    }
]
