import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneModifyComponent } from './components/phone-modify/phone-modify.component';
import { TestComponent } from './test/test.component';
import { ClientModifyComponent } from './components/client-modify/client-modify.component';
import { PageComponent } from './components/page/page.component';
import { ClientFilterComponent } from './components/client-filter/client-filter.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceCarModifyComponent } from './components/insurance-car-modify/insurance-car-modify.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { InsuranceTypeListComponent } from './components/insurance-type-list/insurance-type-list.component';
import { InsuranceTypeModifyComponent } from './components/insurance-type-modify/insurance-type-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ModalComponent,
    PhoneModifyComponent,
    TestComponent,
    ClientModifyComponent,
    PageComponent,
    ClientFilterComponent,
    InsuranceListComponent,
    InsuranceCarModifyComponent,
    ClientDetailComponent,
    InsuranceTypeListComponent,
    InsuranceTypeModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
