import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroConvidadosComponent } from './cadastro-convidados/cadastro-convidados.component';
import { ListaConvidadosComponent } from './lista-convidados/lista-convidados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroConvidadosComponent,
    ListaConvidadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
