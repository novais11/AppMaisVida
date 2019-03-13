
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CadastroUsuarioPageModule } from '../cadastro-usuario/cadastro-usuario.module';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage  {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor(public navCtrl: NavController){
    this.pessoas = [
      // tslint:disable-next-line:max-line-length
      {id: 1, nome: 'Pedro', email: 'pedro@gamil.com', nacionalidade: 'Brasileiro',
       estado: 'Distrito Federal', Escolaridade: 'Superior Completo', sConjugal: 'Casado',
        fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria'},

      {id: 2, nome: 'Paula', email: 'paula@gamil.com', nacionalidade: 'Argentino',
      estado: 'Distrito Federal', Escolaridade: 'Ensino Médio Completo', sConjugal: 'Solteiro',
       fEscola: 'não', nomeMae: 'Maria José', nomePai: 'José Maria'},

      {id: 3, nome: 'Ana', email: 'anapaula@gamil.com', nacionalidade: 'Uruguaio',
      estado: 'Distrito Federal', Escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria'},

      {id: 4, nome: 'Rogério', email: 'rogerio@gamil.com', nacionalidade: 'Paraguaio',
      estado: 'Distrito Federal', Escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria'},
    ];

    this.pessoasFiltradas = this.pessoas.sort((a,b)=> {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
  }

  filtrarItems() {  
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);  
  }

  filtrarPessoas(nome) {
    
    this.pessoasFiltradas = this.pessoas.sort((a,b)=> {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    return this.pessoasFiltradas.filter((item) => {      
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

  irParaCadastro() {
    console.log('funfou');
  }

 

}
