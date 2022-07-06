import { Component, Input, OnInit } from '@angular/core';
import { Paginador } from 'src/app/compartilhado/modelos/paginador';
import { MovimentacaoInterface } from '../../interfaces/movimentacao.interface';

@Component({
  selector: 'app-lista-movimentacoes',
  templateUrl: './lista-movimentacoes.component.html',
  styleUrls: ['./lista-movimentacoes.component.scss']
})
export class ListaMovimentacoesComponent implements OnInit {

  @Input()
  movements: MovimentacaoInterface[] = [];

  paginator!: Paginador<MovimentacaoInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginador(this.movements);
    this.paginator.paginate();
  }
}
