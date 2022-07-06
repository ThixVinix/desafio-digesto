import { Component, Input, OnInit } from '@angular/core';
import { Paginador } from 'src/app/compartilhado/modelos/paginador';
import { ProcessoRelacionadoInterface } from '../../interfaces/processos-relacionados.interface';

@Component({
  selector: 'app-processos-relacionados',
  templateUrl: './processos-relacionados.component.html',
  styleUrls: ['./processos-relacionados.component.scss']
})
export class ProcessosRelacionadosComponent implements OnInit {
  @Input()
  relatedProcesses: ProcessoRelacionadoInterface[] = [];

  paginator!: Paginador<ProcessoRelacionadoInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginador(this.relatedProcesses);
    this.paginator.paginate();
  }
}
