import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { AnexoInterface } from '../interfaces/anexo.interface';
import { Anexo } from '../tipos/anexo.type';

@Injectable({ providedIn: 'root' })
export class AnexoAdapter
  implements Adapter<AnexoInterface, Anexo>
{
  adapt(item: Anexo): AnexoInterface {
    return {
      id: item[0],
      downloadUrl: item[1],
      type: item[2],
      publicationDate: item[3],
      textContent: item[4],
      obtainingDate: item[5],
      movementId: item[6],
      title: item[7],
    };
  }
}
