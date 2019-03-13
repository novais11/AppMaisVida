
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CadastroUsuarioPageModule } from '../cadastro-usuario/cadastro-usuario.module';
import { UsuarioModel } from 'src/shared/models/usuario.model';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage  {

  nome: string = '';
  pessoas: Array<UsuarioModel> = new Array<UsuarioModel>();
  pessoasFiltradas: any;
  now = new Date();
  dataHoje: any;

  constructor(public navCtrl: NavController){
    this.pessoas = [
      // tslint:disable-next-line:max-line-length
      {id: 1, nome: 'Pedro', email: 'pedro@gamil.com', nacionalidade: 'Brasileiro',
       estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
        fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria', data: this.converterData() },

      {id: 2, nome: 'Paula', email: 'paula@gamil.com', nacionalidade: 'Argentino',
      estado: 'Distrito Federal', escolaridade: 'Ensino Médio Completo', sConjugal: 'Solteiro',
       fEscola: 'não', nomeMae: 'Maria José', nomePai: 'José Maria', data:this.converterData()},

      {id: 3, nome: 'Ana', email: 'anapaula@gamil.com', nacionalidade: 'Uruguaio',
      estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria', data:this.converterData()},

      {id: 4, nome: 'Rogério', email: 'rogerio@gamil.com', nacionalidade: 'Paraguaio',
      estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria', data:this.converterData()},
    ];

    this.listaAtualizada();
  }

  converterData() {
    this.dataHoje = this.now.getDay() + 1 +"/" + this.now.getMonth() +"/"+ this.now.getFullYear();
  }

  listaAtualizada() {
    const lista = localStorage.getItem('listaAtualizada');
    if ( lista != null) {
      this.pessoasFiltradas = lista ? JSON.parse(lista) : [];
    } else{
      this.pessoasFiltradas = this.pessoas.sort((a, b) => {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
    }
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
    this.navCtrl.navigateForward('cadastro-usuario');
    localStorage.setItem('listaAtualizada', JSON.stringify(this.pessoas));
  }

}
