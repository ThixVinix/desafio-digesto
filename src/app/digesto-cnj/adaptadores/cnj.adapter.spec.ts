import { CnjFromApi } from '../interfaces/cnj-from-api.interface';
import { cnjFromApiMock } from '../mockups/cnj.mock';
import { ClasseNatureza } from '../tipos/classe-natureza.type';
import { AnexoAdapter } from './anexo.adapter';
import { AudienciaAdapter } from './audiencia.adapter';
import { CnjAdapter } from './cnj.adapter';
import { AdvogadoAdapter } from './advogado.adapter';
import { MovimentacaoAdapter } from './movimentacao.adapter';
import { PartesAdapter } from './partes.adapter';
import { ProcessosRelacionadosAdapter } from './processos-relacionados.adapter';

describe('CnjAdapter', () => {
  let adapter = new CnjAdapter(
    new PartesAdapter(new AdvogadoAdapter()),
    new MovimentacaoAdapter(),
    new AudienciaAdapter(),
    new AnexoAdapter(),
    new ProcessosRelacionadosAdapter()
  );

  it('should adapt cnj', () => {
    const cnjFromApi: CnjFromApi = {
      ...cnjFromApiMock,
      movs: [
        [
          '2022-03-07',
          'Andamento - Expedicao',
          'EXPEDICAO - Expedição de comunicação via sistema.',
          '',
          4638273704,
          [[21, 2]],
        ],
      ],
      audiencias: [
        [
          '2020-03-19 14:30:00',
          'Unidade Jurisdicional Cível - 1º JD da Comarca de Sete Lagoas.',
          'Conciliação',
          'cancelada',
        ],
      ],
      anexos: [
        [
          12,
          'www.test.download.com',
          2,
          '2022-02-10T10:10:10',
          'Lorem ipsmun',
          '2022-02-10T10:10:10',
          12,
          'Attachment Test',
        ],
      ],
      processosRelacionados: [
        {
          tribunal: 'TJMG',
          natureza: 'RECURSO INOMINADO CIVEL',
          distribuicao_data: '2020-07-13',
          numero: '50016828820208130000',
          instancia: 2,
          codigo_identificador:
            'RECURSO INOMINADO CÍVEL 5001682-88.2020.8.13.0000',
          id: 123456789,
        },
      ],
      partes: [
        [
          11111111,
          1234,
          'EMPRESA X S.A.',
          'EMPRESA X SA',
          0,
          0,
          '',
          40,
          'REQUERENTE',
          [[132154656, 'JOÃO PEREIRA', 'XX123465', '987456321', '']],
          true,
          false,
          false,
          false,
          0,
          0,
          false,
        ],
      ],
    };

    const cnjAdapter = adapter.adapt(cnjFromApi);

    expect(cnjAdapter).toEqual({
      regionalCnj: cnjFromApi.regional_cnj,
      alternativeNumber: cnjFromApi.numeroAlternativo,
      role: cnjFromApi.papel,
      natureId: cnjFromApi.natureza_id,
      rod: cnjFromApi.vara,
      natureClass: cnjFromApi.classeNatureza,
      roleId: cnjFromApi.papel_id,
      movements: cnjFromApi.movs.map((movement) =>
        adapter['movementAdapter'].adapt(movement)
      ),
      distributionType: cnjFromApi.distribuicaoTipo,
      situation: cnjFromApi.situacao,
      jugde: cnjFromApi.juiz,
      area: cnjFromApi.area,
      extraSubject: cnjFromApi.assuntoExtra,
      injunction: cnjFromApi.liminar,
      audiences: cnjFromApi.audiencias.map((audience) =>
        adapter['audienceAdapter'].adapt(audience)
      ),
      originalRod: cnjFromApi.vara_original,
      free: cnjFromApi.gratuita,
      value: cnjFromApi.valor,
      attachments: cnjFromApi.anexos.map((anexo) =>
        adapter['attachmentAdapter'].adapt(anexo)
      ),
      updateDate: cnjFromApi.alteradoEm,
      systemFont: cnjFromApi.fonte_sistema,
      forum: cnjFromApi.foro,
      situationId: cnjFromApi.situacao_situacaoID,
      verdictDate: cnjFromApi.sentencaData,
      instance: cnjFromApi.instancia,
      relatedProcesses: cnjFromApi.processosRelacionados.map((processo) =>
        adapter['relatedProcessAdapter'].adapt(processo)
      ),
      number: cnjFromApi.numero,
      customs: cnjFromApi.customs,
      flag: Boolean(cnjFromApi.flag),
      judicialDistrictCnj: cnjFromApi.comarca_cnj,
      judicialDistrict: cnjFromApi.comarca,
      tribunalId: cnjFromApi.tribunalID,
      natureClassDigesto: cnjFromApi.classeNatureza_dg as ClasseNatureza,
      forumCnj: cnjFromApi.foro_cnj,
      tribunal: cnjFromApi.tribunal,
      areaId: cnjFromApi.area_id,
      processId: cnjFromApi.processoID,
      distributionDate: cnjFromApi.distribuicaoData,
      hasSecretJustice: cnjFromApi.segredo_justica,
      isFiled: cnjFromApi.arquivado,
      classes: cnjFromApi.classes,
      access: cnjFromApi.acessos,
      uf: cnjFromApi.uf,
      createDate: cnjFromApi.criadoEm,
      parts: cnjFromApi.partes.map((parte) =>
        adapter['partsAdapter'].adapt(parte)
      ),
      polo: cnjFromApi.polo,
    });
  });
});
