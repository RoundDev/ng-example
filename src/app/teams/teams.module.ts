import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TeamsComponent,
    TeamsListComponent
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
