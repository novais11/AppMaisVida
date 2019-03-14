import { AlertController } from '@ionic/angular';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioModel } from 'src/shared/models/usuario.model';
import { UsuarioService } from '../services/usuario';

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
    private alertCtrl : AlertController) { 
    this.inicializarLista();
  }

  ngOnInit() {}

  inicializarLista() {
    const lista = localStorage.getItem('listaAtualizada');
    this.listaPessoas = lista ? JSON.parse(lista) : [];
  }

  ionViewDidEnter(){
    
    let usuario = this.usuarioService.getDestn();
    this.pessoas = new UsuarioModel(usuario);
    usuario = this.usuarioService.setDestn(null);
    
  }

  async abrirAlert(){
    console.log('teste');
    this.eventoAlert.emit(true);
    let alert = await this.alertCtrl.create({
      header: 'Deseja excluir este perfil?',
      message: 'Ao excluir este perfil, todos os dados serão deletados e não poderão ser recuperados novamente. Você tem certeza disso?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler : ()=>{
            this.alertCtrl.dismiss();
          }
        },
        {
          text:'Sim',
          handler : ()=>{

          }
        }
      ]
    });
  }

}
