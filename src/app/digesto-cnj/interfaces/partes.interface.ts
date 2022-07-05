import { AdvogadoInterface } from './advogado.interface';

export interface PartesInterface {
  processInternalId: number;
  partInternalId: number;
  name: string;
  normalizedName: string;
  cnpj: number;
  cpf: number;
  document: string;
  partRelationId: number;
  normalizedRelation: string;
  lawyers: AdvogadoInterface[];
  isAuthor: boolean;
  isCoAuthor: boolean;
  isAccused: boolean;
  isNeutral: boolean;
  zipCode: number;
  monitoredPersonId: number;
  isPhysicalPerson: boolean;
}
