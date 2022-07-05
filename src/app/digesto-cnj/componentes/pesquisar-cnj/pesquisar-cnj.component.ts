import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX_CNJ_COM_FORMATACAO } from 'src/app/compartilhado/utilitario/regex-cnj';

@Component({
  selector: 'app-pesquisar-cnj',
  templateUrl: './pesquisar-cnj.component.html',
  styleUrls: ['./pesquisar-cnj.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PesquisarCnjComponent {
  form: FormGroup = this.buildForm();

  @Output()
  private filterCnj = new EventEmitter<string>();

  @ViewChild('inputCnj', { static: false }) inputCnj!: ElementRef;

  private get cnjControl() {
    return this.form.get('cnj')!;
  }

  constructor(private formBuilder: FormBuilder, private render: Renderer2) {}

  submitForm(): void {
    if (this.cnjControl.valid) {
      this.render.removeClass(this.inputCnj.nativeElement, "is-valid");
      this.filterCnj.emit(this.cnjControl.value);
      this.form.reset();
    }
  }

  checarPreenchimentoCnj(event: any): void {
    let cnjInput: string = event.target.value;

    if (!this.validarCnj(cnjInput)) {
      this.render.addClass(this.inputCnj.nativeElement, "is-invalid");
      this.render.removeClass(this.inputCnj.nativeElement, "is-valid");
    } else {
      this.render.addClass(this.inputCnj.nativeElement, "is-valid");
      this.render.removeClass(this.inputCnj.nativeElement, "is-invalid");
    }
  }

  private validarCnj(cnj: string): boolean {
    if (cnj == null || cnj == undefined || !cnj.match(/^(\d{7})-(\d{2}).(\d{4}).(\d{1}).(\d{2}).(\d{4})$/)) {
      return false;
    } else {
      return true;
    }
  }

  hasCnjErrors(): boolean {
    const wasControlChanged =
      this.cnjControl.touched || !this.cnjControl.pristine;
    return Boolean(wasControlChanged && this.cnjControl.errors);
  }

  getCnjErrorMessage(): string {
    if (this.cnjControl.hasError('required')) {
      return 'Preencha o CNJ.';
    }

    if (this.cnjControl.hasError('pattern')) {
      return 'Formato inválido. Digite o CNJ no seguinte formato: XXXXXXX-XX.XXXX.X.XX.XXXX';
    }

    return '';
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      cnj: [
        null,
        [Validators.required, Validators.pattern(REGEX_CNJ_COM_FORMATACAO.regex)],
      ],
    });
  }
}
