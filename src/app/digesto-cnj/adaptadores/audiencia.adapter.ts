import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { AudienciaInterface } from '../interfaces/Audiencia.interface';
import { Audiencia } from '../tipos/audiencia.type';

@Injectable({ providedIn: 'root' })
export class AudienciaAdapter implements Adapter<AudienciaInterface, Audiencia> {
  adapt(item: Audiencia): AudienciaInterface {
    return {
      date: item[0],
      local: item[1],
      type: item[2],
      situation: item[3],
    };
  }
}
