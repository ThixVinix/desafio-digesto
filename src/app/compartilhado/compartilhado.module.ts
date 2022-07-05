import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { CnjDirective } from './diretivas/cnj.directive';

@NgModule({
  declarations: [CnjDirective, PaginadorComponent],
  imports: [CommonModule],
  exports: [CnjDirective, PaginadorComponent],
})
export class CompartilhadoModule { }
