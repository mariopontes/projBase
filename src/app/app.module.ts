import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
