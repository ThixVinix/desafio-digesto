import { TipoAnexo } from "../tipos/tipo-anexo.type";

export interface AnexoInterface {
  id: number;
  downloadUrl: string;
  type: TipoAnexo;
  publicationDate: string;
  textContent: string;
  obtainingDate: string;
  movementId: number;
  title: string;
}
