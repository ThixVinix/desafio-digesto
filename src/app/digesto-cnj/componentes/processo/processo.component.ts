import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CnjInterface } from 'src/app/digesto-cnj/interfaces/cnj.interface';
@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent {

  @Input()
  process$!: Observable<CnjInterface>;

}
