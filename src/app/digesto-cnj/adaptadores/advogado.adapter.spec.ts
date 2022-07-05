import { Advogado } from '../tipos/advogado.type';
import { AdvogadoAdapter } from './advogado.adapter';

describe('AdvogadoAdapter', () => {
  let adapter = new AdvogadoAdapter();

  it('should adapt lawyer', () => {
    const lawyerFromApi: Advogado = [
      546465465,
      'JOÃO PEREIRA',
      'XX123456 ',
      '00122364985',
      'SP',
    ];

    const lawyerAdapted = adapter.adapt(lawyerFromApi);

    expect(lawyerAdapted).toEqual({
      id: lawyerFromApi[0],
      name: lawyerFromApi[1],
      oab: lawyerFromApi[2],
      cpf: lawyerFromApi[3],
      uf: lawyerFromApi[4],
    });
  });
});
