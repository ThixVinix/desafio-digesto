import { TipoAnexo } from './tipo-anexo.type';

/**
 * - [0] processo Anexo ID,
 * - [1] endereço HTTP para download do anexo
 * - [2] tipo de anexo
 * - [3] data de publicacao
 * - [4] conteudo em modo texto 
 * - [5] data de obtenção 
 * - [6] ID movimentação
 * - [7] título do anexo
 */
export type Anexo = [
  number,
  string,
  TipoAnexo,
  string,
  string,
  string,
  number,
  string
];
