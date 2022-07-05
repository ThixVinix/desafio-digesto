import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { PartesInterface } from '../interfaces/partes.interface';
import { Partes } from '../tipos/partes.type';
import { AdvogadoAdapter } from './advogado.adapter';

@Injectable({ providedIn: 'root' })
export class PartsAdapter implements Adapter<PartesInterface, Partes> {
  constructor(private lawerAdapter: AdvogadoAdapter) {}

  adapt(item: Partes): PartesInterface {
    return {
      processInternalId: item[0],
      partInternalId: item[1],
      name: item[2],
      normalizedName: item[3],
      cnpj: item[4],
      cpf: item[5],
      document: item[6],
      partRelationId: item[7],
      normalizedRelation: item[8],
      lawyers: item[9].map((lawyer) => this.lawerAdapter.adapt(lawyer)),
      isAuthor: item[10],
      isCoAuthor: item[11],
      isAccused: item[12],
      isNeutral: item[13],
      zipCode: item[14],
      monitoredPersonId: item[15],
      isPhysicalPerson: item[16],
    };
  }
}
