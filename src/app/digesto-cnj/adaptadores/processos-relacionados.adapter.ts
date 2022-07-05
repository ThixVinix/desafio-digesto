import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import {
  ProcessoRelacionadoFromApi,
  ProcessoRelacionadoInterface,
} from '../interfaces/processos-relacionados.interface';

@Injectable({ providedIn: 'root' })
export class ProcessosRelacionadosAdapter
  implements Adapter<ProcessoRelacionadoInterface, ProcessoRelacionadoFromApi>
{
  adapt(item: ProcessoRelacionadoFromApi): ProcessoRelacionadoInterface {
    return {
      id: item.id,
      tribunal: item.tribunal,
      caseNumber: item.numero,
      instance: item.instancia,
      caseNature: item.natureza,
      distributionDate: item.distribuicao_data,
      identifierCode: item.codigo_identificador,
    };
  }
}
