import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HostListComponent } from 'app/host-list/host-list.component';
import { ContainerListComponent } from 'app/container-list/container-list.component';

const routes: Routes =[
  {path:'', redirectTo: '/hosts', pathMatch: 'full'},
  {path:'hosts', component: HostListComponent},
  {path:'host/:host_id', component: ContainerListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
