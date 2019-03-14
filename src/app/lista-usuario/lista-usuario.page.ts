
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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

  @Input()
  listaAualizada = false;

  nome: string = '';
  pessoas: Array<UsuarioModel> = new Array<UsuarioModel>();
  pessoasFiltradas: any;
  now = new Date();
  dataHoje: any;

 
  constructor(public navCtrl: NavController,
              public usuarioService: UsuarioService,
              private popoverCtrl: PopoverController,
              private  alertCtrl: AlertController) {
    
    
    
  }

  converterData() {
    this.dataHoje = this.now.getDay() + 1 +"/" + this.now.getMonth() +"/"+ this.now.getFullYear();
  }
 

  ngOnChanges(simpleChanges: SimpleChanges): void {
    debugger;
        this.listaAtualizada();          
  }

  ionViewDidEnter() {
    this.listaAtualizada();
  }

  

  listaAtualizada() {

    const lista = localStorage.getItem('listaAtualizada');
    if ( lista != null && this.listaAualizada == false) {
      this.pessoasFiltradas = lista ? JSON.parse(lista) : [];
    } else if(lista != null && this.listaAualizada == true){
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




}
