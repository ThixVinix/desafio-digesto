import { Advogado } from "./advogado.type";

/**
 * - [0] ID interno da participação dessa parte nesse processo (numero),
 * - [1] ID interno para essa parte (numero),
 * - [2] nome da parte (texto),
 * - [3] nome da parte normalizado: sem sufixos de empresas, pontuações etc (texto),
 * - [4] cnpj: quando disponibilizado por algum tribunal ou na inicial de processos digitais (numero),
 * - [5] cpf: quando disponibilizado por algum tribunal ou na inicial de processos digitais.
 * - [6] documento: CNPJ ou CPF formatado, dependendo da natureza da parte (texto),
 * - [7] parteRelacaoID: ID do tipo de relação/papel da parte no processo (numero),
 * - [8] relacaoNormalizado: nome da relação/papel que esta parte desempenha no processo (texto),
 * - [9] advogados: lista de tuplas, cada tupla representa um advogado desta parte. Lawyer[]
 * - [10] parte é autora (booleano),
 * - [11] parte é co-autora (booleano),
 * - [12] parte é ré (booleano),
 * - [13] parte é neutra (booleano),
 * - [14] CEP da parte (numero).
 * - [15] ID da entidade monitored_person correspondente a esta parte.
 * - [16] parte é pessoa física (boolean)
 */
export type Partes = [
  number,
  number,
  string,
  string,
  number,
  number,
  string,
  number,
  string,
  Advogado[],
  boolean,
  boolean,
  boolean,
  boolean,
  number,
  number,
  boolean
];
