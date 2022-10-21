import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
<<<<<<< HEAD
const routes: Routes = [
  {
    path: '',
    component: ListarPensamentoComponent,
    pathMatch:'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamento',
    component: ListarPensamentoComponent
  }
];
=======
const routes: Routes = [];
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)
=======
const routes: Routes = [];
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
