import { Area } from '../tipos/area.type';
import { Anexo } from '../tipos/anexo.type';
import { Audiencia } from '../tipos/audiencia.type';
import { Flag } from '../tipos/flag.type';
import { Movimentacao } from '../tipos/movimentacao.type';
import { Partes } from '../tipos/partes.type';
import { ProcessoRelacionadoFromApi } from './processos-relacionados.interface';

export interface CnjFromApi {
  regional_cnj: boolean | null;
  numeroAlternativo: string;
  papel: string;
  natureza_id: number;
  vara: string;
  classeNatureza: string;
  papel_id: number;
  movs: Movimentacao[];
  distribuicaoTipo: string;
  situacao: string | null;
  juiz: string | null;
  area: Area;
  assuntoExtra: string;
  liminar: boolean | null;
  audiencias: Audiencia[];
  vara_original: string;
  gratuita: boolean | null;
  valor: number | null;
  anexos: Anexo[];
  alteradoEm: string;
  fonte_sistema: string;
  foro: string;
  situacao_situacaoID: number | null;
  sentencaData: string | null;
  instancia: number;
  processosRelacionados: ProcessoRelacionadoFromApi[];
  numero: string;
  customs: any[];
  flag: Flag;
  comarca_cnj: string;
  comarca: string;
  tribunalID: number;
  classeNatureza_dg: number;
  foro_cnj: string;
  tribunal: string;
  area_id: number;
  processoID: number;
  distribuicaoData: string;
  segredo_justica: boolean;
  arquivado: boolean;
  classes: string[];
  acessos: string[];
  uf: string;
  criadoEm: string;
  partes: Partes[];
  polo: boolean;

  /**
   * 0 para não-extinto.
   * 1 ou mais para já extinto.
   *
   * Alguns tribunais mostram um checkbox “extinto”, e salvamos nesse campo o
   * valor que estiver no tribunal.
   * Pode ser o caso do tribunal não informar isso e o processo estar extinto,
   * nesse caso vamos informar por default 0.
   */
  extinto: number;
}

export interface OperationStatus {
  status_op: string;
}
