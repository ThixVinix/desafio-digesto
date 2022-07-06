import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CnjInterface } from './interfaces/cnj.interface';
import { CnjService } from './servicos/cnj.service';
@Component({
  selector: 'app-digesto-cnj',
  templateUrl: './digesto-cnj.component.html',
  styleUrls: ['./digesto-cnj.component.scss']
})
export class DigestoCnjComponent {
  process$!: Observable<CnjInterface>;

  constructor(private cnjService: CnjService) {}

  getCnj(cnj: string): void {
    this.process$ = this.cnjService.getProcess(cnj);
  }
}
