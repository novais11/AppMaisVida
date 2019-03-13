import { UsuarioModel } from './../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  nacionalidades: any;
  estados: any;
  ecolaridades: any;
  situacaoConjugal: any;
  frequenta: any;
  pessoas: UsuarioModel = new UsuarioModel();
  listaPessoas: Array<any> = [];

  constructor() {
    this.nacionalidades = [
      {nome: 'Brasileiro'},
      {nome: 'Argentino'},
      {nome: 'Chileno'},
      {nome: 'Uruguaio'},
      {nome: 'Colombiano'},
      {nome: 'Paraguaio'},
      {nome: 'Mexicano'},
      {nome: 'Alemão'},
      {nome: 'Francês'},
      {nome: 'Croata'},
      {nome: 'Espanhol'},
      {nome: 'Francês'},
      {nome: 'Italiano'}
    ];

    this.estados = [
      {nome: 'Acre'},
      {nome: 'Alagoas'},
      {nome: 'Amapá'},
      {nome: 'Amazonas'},
      {nome: 'Bahia'},
      {nome: 'Ceará'},
      {nome: 'Distrito Federal'},
      {nome: 'Espírito Santo'},
      {nome: 'Goiás'},
      {nome: 'Maranhão'},
      {nome: 'Mato Grosso'},
      {nome: 'Mato Grosso do Sul'},
      {nome: 'Minas Gerais'},
      {nome: 'Pará'},
      {nome: 'Paraíba'},
      {nome: 'Paraná'},
      {nome: 'Pernambuco'},
      {nome: 'Piauí'},
      {nome: 'Rio de Janeiro'},
      {nome: 'Rio Grande do Norte'},
      {nome: 'Rio Grande do Sul'},
      {nome: 'Rondônia'},
      {nome: 'Roraima'},
      {nome: 'Santa Catarina'},
      {nome: 'São Paulo'},
      {nome: 'Sergipe'},
      {nome: 'Tocantins'},

    ];

    this.ecolaridades = [
      {nome: 'Fundamental - Incopleto'},
      {nome: 'Fundamental - Completo'},
      {nome: 'Médio - Incopleto'},
      {nome: 'Médio - Completo'},
      {nome: 'Superior - Incopleto'},
      {nome: 'Superior - Completo'},
      {nome: 'Pós-Graduação - Incopleto'},
      {nome: 'Pós-Graduação - Completo'},
    ];

    this.situacaoConjugal = [
      {nome: 'Solteiro(a)'},
      {nome: 'Casado(a)'},
      {nome: 'Divorciado(a)'},
      {nome: 'Viúvo(a)'},
      {nome: 'Separado(a)'},
    ];

    this.frequenta = [
      {nome: 'Sim'},
      {nome: 'Não'}
    ];


    this.inicializarLista();

  }

  inicializarLista() {
    const lista = localStorage.getItem('listaAtualizada');
    this.listaPessoas = lista ? JSON.parse(lista) : [];
  }

  ngOnInit() {
    console.log(this.listaPessoas);
  }

  salvar() {
    this.pessoas.id = this.listaPessoas.length + 1;
    this.listaPessoas.push(this.pessoas);
    localStorage.setItem('listaAtualizada', JSON.stringify(this.listaPessoas));
    this.pessoas = new UsuarioModel();
    console.log(this.listaPessoas);
  }



}
