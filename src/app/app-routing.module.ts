import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/clients-list', pathMatch: 'full'},
 {path: 'clients-list',component: ClientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
