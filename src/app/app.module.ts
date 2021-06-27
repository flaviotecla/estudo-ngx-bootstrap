import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Exemplo01Component } from './exemplo01/exemplo01.component';
import { Exemplo02Component } from './exemplo02/exemplo02.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { Exemplo03Component } from './exemplo03/exemplo03.component';
import { Exemplo04Component } from './exemplo04/exemplo04.component';
import { Exemplo05Component } from './exemplo05/exemplo05.component';
import { ModalsComponent } from './pages/modals/modals.component';
import { DropdownsComponent } from './pages/dropdowns/dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Exemplo02Component,
    ModalContentComponent,
    Exemplo03Component,
    Exemplo04Component,
    Exemplo05Component,
    ModalsComponent,
    DropdownsComponent
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
