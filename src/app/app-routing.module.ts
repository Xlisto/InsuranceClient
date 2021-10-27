import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients-list', pathMatch: 'full' },
  { path: 'clients-list', component: ClientsListComponent },
  { path: 'insurance-list/:id', component: InsuranceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
