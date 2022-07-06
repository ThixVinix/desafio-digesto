import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DigestoCnjRoutingModule } from './digesto-cnj-routing.module';
import { DigestoCnjComponent } from './digesto-cnj.component';
import { PesquisarCnjComponent } from './componentes/pesquisar-cnj/pesquisar-cnj.component';
import { ProcessoComponent } from './componentes/processo/processo.component';
import { ProcessosRelacionadosComponent } from './componentes/processos-relacionados/processos-relacionados.component';
import { ProcessosDetalhesComponent } from './componentes/processos-detalhes/processos-detalhes.component';
import { ListaPartesComponent } from './componentes/lista-partes/lista-partes.component';
import { ListaMovimentacoesComponent } from './componentes/lista-movimentacoes/lista-movimentacoes.component';
import { ListaAnexosComponent } from './componentes/lista-anexos/lista-anexos.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';



@NgModule({
  declarations: [
    DigestoCnjComponent,
    PesquisarCnjComponent,
    ProcessosDetalhesComponent,
    ListaPartesComponent,
    ProcessoComponent,
    ListaMovimentacoesComponent,
    ListaAnexosComponent,
    ProcessosRelacionadosComponent,
  ],
  imports: [
    CommonModule,
    DigestoCnjRoutingModule,
    CompartilhadoModule,
    ReactiveFormsModule,
  ]
})
export class DigestoCnjModule { }