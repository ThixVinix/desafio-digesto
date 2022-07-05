import { Component, Input } from '@angular/core';
import { Paginador } from '../../modelos/paginador';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent {
  @Input() paginator!: Paginador<unknown>;
}
