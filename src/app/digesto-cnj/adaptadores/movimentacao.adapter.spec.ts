import { STANDARDIZED_TYPE_DIGESTO } from 'src/app/compartilhado/utilitario/standardized-type-digesto';
import { Movimentacao } from '../tipos/movimentacao.type';
import { MovimentacaoAdapter } from './movimentacao.adapter';

describe('MovimentacaoAdapter', () => {
  let adapter = new MovimentacaoAdapter();

  it('should adapt movement', () => {
    const movementFromApi: Movimentacao = [
      '2022-03-07',
      'Andamento - Expedicao',
      'EXPEDICAO - Expedição de comunicação via sistema.',
      '',
      4638273704,
      [[21, 2]],
    ];

    const movementAdapted = adapter.adapt(movementFromApi);

    expect(movementAdapted).toEqual({
      date: movementFromApi[0],
      type: movementFromApi[1],
      text: movementFromApi[2],
      judgeName: movementFromApi[3],
      id: movementFromApi[4],
      digestType:
        STANDARDIZED_TYPE_DIGESTO[movementFromApi[5][0][0]][
          movementFromApi[5][0][1]
        ],
    });
  });
});
