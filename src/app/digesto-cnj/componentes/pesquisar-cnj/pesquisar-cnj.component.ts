import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-pesquisar-cnj',
  templateUrl: './pesquisar-cnj.component.html',
  styleUrls: ['./pesquisar-cnj.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PesquisarCnjComponent implements OnInit {
  ngOnInit(): void {
    this.isCnjValido = true;
  }

  @ViewChild('inputCnj', { static: false }) inputCnj!: ElementRef;

  REGEX_CNJ = /^(\d{7})-(\d{2}).(\d{4}).(\d{1}).(\d{2}).(\d{4})$/;

  MSG_FORMATO_INVALIDO: string =
    "CNJ inválido, por favor inserir um CNJ no seguinte formato: 'XXXXXXX-XX.XXXX.X.XX.XXXX'";

  mensagemErro: string = this.MSG_FORMATO_INVALIDO;

  cnj: string = '';

  isCnjValido: boolean = true;

  constructor(private element: ElementRef, private render: Renderer2) {}

  enviarCnj(): void {
    if (!this.validarCnj(this.cnj)) {
      alert(this.MSG_FORMATO_INVALIDO);
      return;
    } else {
      alert('CNJ válido!');
    }
  }

  checarPreenchimentoCnj(event: any): void {
    let cnjInput: string = event.target.value;

    if (!this.validarCnj(cnjInput)) {
      this.isCnjValido = false;
      this.mensagemErro = this.MSG_FORMATO_INVALIDO;
      this.render.addClass(this.inputCnj.nativeElement, "is-invalid");
      this.render.removeClass(this.inputCnj.nativeElement, "is-valid");
    } else {
      this.isCnjValido = true;
      this.mensagemErro = '';
      this.render.addClass(this.inputCnj.nativeElement, "is-valid");
      this.render.removeClass(this.inputCnj.nativeElement, "is-invalid");
    }
  }

  private validarCnj(cnj: string): boolean {
    if (cnj == null || cnj == undefined || !cnj.match(this.REGEX_CNJ)) {
      return false;
    } else {
      return true;
    }
  }
}
