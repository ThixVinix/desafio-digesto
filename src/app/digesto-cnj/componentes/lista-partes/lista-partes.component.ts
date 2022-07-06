import { Component, Input, OnInit } from '@angular/core';
import { Paginador } from 'src/app/compartilhado/modelos/paginador';
import { PartesInterface } from '../../interfaces/partes.interface';

@Component({
  selector: 'app-lista-partes',
  templateUrl: './lista-partes.component.html',
  styleUrls: ['./lista-partes.component.scss']
})
export class ListaPartesComponent implements OnInit {

  @Input()
  parts: PartesInterface[] = [];

  paginator!: Paginador<PartesInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginador(this.parts);
    this.paginator.paginate();
  }

}
