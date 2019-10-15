import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CadastroConvidadosComponent } from './cadastro-convidados/cadastro-convidados.component';
import { ListaConvidadosComponent } from './lista-convidados/lista-convidados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'clientesVip';
}



