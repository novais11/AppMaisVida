import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-usuario',
    pathMatch: 'full'
  },
  { path: 'cadastro-usuario',
    loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' 
  },
  { path: 'lista-usuario',
    loadChildren: './lista-usuario/lista-usuario.module#ListaUsuarioPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
