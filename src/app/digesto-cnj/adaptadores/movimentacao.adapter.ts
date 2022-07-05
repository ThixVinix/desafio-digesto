import { Injectable } from '@angular/core';
import { STANDARDIZED_TYPE_DIGESTO } from 'src/app/compartilhado/utilitario/standardized-type-digesto';
import { Adapter } from '../interfaces/adapter.interface';
import { MovimentacaoInterface } from '../interfaces/movimentacao.interface';
import { Movimentacao } from '../tipos/movimentacao.type';

@Injectable({
  providedIn: 'root',
})
export class MovimentacaoAdapter implements Adapter<MovimentacaoInterface, Movimentacao> {
  adapt(item: Movimentacao): MovimentacaoInterface {
    return {
      date: item[0],
      type: item[1],
      text: item[2],
      judgeName: item[3],
      id: item[4],
      digestType: STANDARDIZED_TYPE_DIGESTO[item[5][0][0]][item[5][0][1]],
    };
  }
}
