import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioModel } from 'src/shared/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pessoas: Array<UsuarioModel> = new Array<UsuarioModel>();
  public appPages = [
    {
      title: 'Lista Usuário',
      url: '/lista-usuario',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  inicializar() {
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
}
