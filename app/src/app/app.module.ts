import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
=======
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)
=======
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent
=======
    CriarPensamentoComponent
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)
=======
    CriarPensamentoComponent
>>>>>>> parent of b5d749a (listagem e criação de pensamentos check)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
