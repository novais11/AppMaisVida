import { AlertController, PopoverController } from '@ionic/angular';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioModel } from 'src/shared/models/usuario.model';
import { UsuarioService } from '../services/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  listaPessoas: Array<any> = [];
  pessoas: UsuarioModel = new UsuarioModel();

  @Output()
  eventoAlert: EventEmitter<any> = new EventEmitter<any>();

  constructor(private usuarioService: UsuarioService,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController) {
    this.inicializarLista();
  }

  ngOnInit() {}

  inicializarLista() {
    const lista = localStorage.getItem('listaAtualizada');
    this.listaPessoas = lista ? JSON.parse(lista) : [];
  }

  ionViewDidEnter() {
    let usuario = this.usuarioService.getDestn();
    this.pessoas = new UsuarioModel(usuario);
  }

  async abrirAlert() {

    this.popoverCtrl.dismiss();
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
            this.removerPorId(this.listaPessoas, this.pessoas.id);
            localStorage.setItem('listaAtualizada', JSON.stringify(this.listaPessoas));
            this.usuarioService.setDestn(null);
          }
        }
      ]
    });

    alert.present();
  }

  removerPorId( array, id) {

    let result = array.filter((el) => {
      return el.id == id;
    });

    for(let elemento of result) {
      let index = array.indexOf(elemento);
      array.splice(index, 1);
    }
  }


}
