import { Audiencia } from '../tipos/audiencia.type';
import { AudienciaAdapter } from './audiencia.adapter';

describe('AudienciaAdapter', () => {
  let adapter = new AudienciaAdapter();

  it('should adapt audience', () => {
    const audienceFromApi: Audiencia = [
      '2020-03-19 14:30:00',
      'Unidade Jurisdicional Cível - 1º JD da Comarca de Sete Lagoas.',
      'Conciliação',
      'cancelada',
    ];

    const audienceAdapted = adapter.adapt(audienceFromApi);

    expect(audienceAdapted).toEqual({
      date: audienceFromApi[0],
      local: audienceFromApi[1],
      type: audienceFromApi[2],
      situation: audienceFromApi[3],
    });
  });
});
