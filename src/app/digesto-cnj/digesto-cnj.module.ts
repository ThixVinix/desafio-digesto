import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigestoCnjRoutingModule } from './digesto-cnj-routing.module';
import { DigestoCnjComponent } from './digesto-cnj.component';
import { PesquisarCnjComponent } from './componentes/pesquisar-cnj/pesquisar-cnj.component';



@NgModule({
  declarations: [
    DigestoCnjComponent,
    PesquisarCnjComponent,
    PesquisarCnjComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DigestoCnjRoutingModule
  ]
})
export class DigestoCnjModule { }