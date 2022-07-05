export interface ProcessoRelacionadoFromApi {
  id: number;
  distribuicao_data: string;
  codigo_identificador: string;
  instancia: number;
  natureza: string;
  numero: string;
  tribunal: string;
}

export interface ProcessoRelacionadoInterface {
  id: number;
  distributionDate: string;
  identifierCode: string;
  instance: number;
  caseNature: string;
  caseNumber: string;
  tribunal: string;
}
