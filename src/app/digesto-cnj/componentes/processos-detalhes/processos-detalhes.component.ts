import { Component, Input } from '@angular/core';
import { CnjInterface } from '../../interfaces/cnj.interface';

@Component({
  selector: 'app-processos-detalhes',
  templateUrl: './processos-detalhes.component.html',
  styleUrls: ['./processos-detalhes.component.scss']
})
export class ProcessosDetalhesComponent {
  @Input()
  process!: CnjInterface;
}
