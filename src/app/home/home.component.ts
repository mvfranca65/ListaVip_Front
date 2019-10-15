import { Component, OnInit } from '@angular/core';
import { CadastroConvidadosComponent } from '../cadastro-convidados/cadastro-convidados.component';
import { ListaConvidadosComponent } from '../lista-convidados/lista-convidados.component';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  routes: Routes = [
    { path: 'cadastro', component: CadastroConvidadosComponent },
    { path: 'lista', component: ListaConvidadosComponent }
  ];

  constructor() { }

  ngOnInit() {
  }

 

}
