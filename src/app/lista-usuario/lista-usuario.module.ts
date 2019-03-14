import { SubMenuComponent } from './../sub-menu/sub-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaUsuarioPage } from './lista-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaUsuarioPage, SubMenuComponent],
  entryComponents:[SubMenuComponent]
})
export class ListaUsuarioPageModule {}
