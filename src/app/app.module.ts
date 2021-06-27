import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { Exemplo02Component } from './exemplo02/exemplo02.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { Exemplo03Component } from './exemplo03/exemplo03.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Exemplo02Component,
    ModalContentComponent,
    Exemplo03Component
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
