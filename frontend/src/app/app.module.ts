import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { AppSettings } from './app.settings';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { SocialIconsComponent } from './theme/components/social-icons/social-icons.component';
import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';
import { UsuarioMenuComponent } from './theme/components/usuario-menu/usuario-menu.component';
import { ContatoComponent } from './theme/components/contato/contato.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    SocialIconsComponent,
    Toolbar1Component,
    UsuarioMenuComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
