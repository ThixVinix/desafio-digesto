import { Component, Input, OnInit } from '@angular/core';
import { Paginador } from 'src/app/compartilhado/modelos/paginador';
import { AnexoInterface } from '../../interfaces/anexo.interface';

@Component({
  selector: 'app-lista-anexos',
  templateUrl: './lista-anexos.component.html',
  styleUrls: ['./lista-anexos.component.scss']
})
export class ListaAnexosComponent implements OnInit {

  @Input()
  attachments: AnexoInterface[] = [];

  paginator!: Paginador<AnexoInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginador(this.attachments);
    this.paginator.paginate();
  }

}
