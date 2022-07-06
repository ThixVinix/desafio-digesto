import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { CnjDirective } from './diretivas/cnj.directive';
import { CnjPipe } from './pipes/cnj.pipe';

@NgModule({
  declarations: [CnjDirective, PaginadorComponent, CnjPipe],
  imports: [CommonModule],
  exports: [CnjDirective, PaginadorComponent, CnjPipe],
})
export class CompartilhadoModule { }
