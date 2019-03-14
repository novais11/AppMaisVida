
import { Component, OnInit, Input } from '@angular/core';
import { NavController, AlertController, PopoverController } from '@ionic/angular';
import { UsuarioModel } from 'src/shared/models/usuario.model';
import { UsuarioService } from '../services/usuario';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';




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

  @Input()
  Tipo: any;


  constructor(public navCtrl: NavController,
              public usuarioService: UsuarioService,
              private popoverCtrl: PopoverController,
              private  alertCtrl: AlertController) {
    this.pessoas = [
      // tslint:disable-next-line:max-line-length
      {id: 1, nome: 'Pedro', email: 'pedro@gamil.com', nacionalidade: 'Brasileiro',
       estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
        fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria' },

      {id: 2, nome: 'Paula', email: 'paula@gamil.com', nacionalidade: 'Argentino',
      estado: 'Distrito Federal', escolaridade: 'Ensino Médio Completo', sConjugal: 'Solteiro',
       fEscola: 'não', nomeMae: 'Maria José', nomePai: 'José Maria' },

      {id: 3, nome: 'Ana', email: 'anapaula@gamil.com', nacionalidade: 'Uruguaio',
      estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria'},

      {id: 4, nome: 'Rogério', email: 'rogerio@gamil.com', nacionalidade: 'Paraguaio',
      estado: 'Distrito Federal', escolaridade: 'Superior Completo', sConjugal: 'Casado',
       fEscola: 'sim', nomeMae: 'Maria José', nomePai: 'José Maria'},
    ];

    localStorage.setItem('listaAtualizada', JSON.stringify(this.pessoas));
  }

  converterData() {
    this.dataHoje = this.now.getDay() + 1 +"/" + this.now.getMonth() +"/"+ this.now.getFullYear();
  }

  ionViewDidEnter() {
    this.listaAtualizada();
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
  }

  atualizar(el) {
    this.usuarioService.setDestn(el);
    this.navCtrl.navigateForward('cadastro-usuario');
  }

  excluir(el, event) {
    this.usuarioService.setDestn(el);
    this.apresentarPopover(event);
  }


  async apresentarPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: SubMenuComponent,
      event: event,
    });

    return await popover.present();
  }

  async abrirAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Deseja excluir este perfil?',
      message: 'Ao excluir este perfil, todos os dados serão deletados e não poderão ser recuperados novamente. Você tem certeza disso?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler : () => {
            this.alertCtrl.dismiss();
          }
        },
        {
          text: 'Sim',
          handler : () => {
            let listaParaExcluir = this.listaAtualizada();

          }
        }
      ]
    });

    alert.present();
  }



}
