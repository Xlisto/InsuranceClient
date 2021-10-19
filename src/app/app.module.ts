import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { PhoneModifyComponent } from './components/phone-modify/phone-modify.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ModalComponent,
    PhoneModifyComponent,
    TestComponent
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
