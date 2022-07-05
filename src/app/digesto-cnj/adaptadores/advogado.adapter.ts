import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { AdvogadoInterface } from '../interfaces/advogado.interface';
import { Advogado } from '../tipos/advogado.type';

@Injectable({
  providedIn: 'root',
})
export class AdvogadoAdapter implements Adapter<AdvogadoInterface, Advogado> {
  adapt(item: Advogado): AdvogadoInterface {
    return {
      id: item[0],
      name: item[1],
      oab: item[2],
      cpf: item[3],
      uf: item[4],
    };
  }
}
