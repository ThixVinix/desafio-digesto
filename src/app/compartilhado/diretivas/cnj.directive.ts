import { Directive, ElementRef, HostListener } from '@angular/core';
import {
  REGEX_CNJ_UM,
  REGEX_CNJ_DOIS,
  REGEX_CNJ_TRES,
  REGEX_CNJ_QUATRO,
  REGEX_CNJ_CINCO,
  REGEX_CNJ_SEM_FORMATACAO,
} from '../utilitario/regex-cnj';

@Directive({
  selector: 'input[cnj]',
})
export class CnjDirective {
  private MAX_LENGTH = 25;

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent): void {
    if (event.inputType === 'deleteContentBackward') {
      return;
    }

    this.element.nativeElement.value = this.transformToCNJ(
      this.element.nativeElement.value,
      event
    );
  }

  private transformToCNJ(value: string, event: InputEvent): string | void {
    let newValue: string = value.replace(/\D/g, '');

    if (value.length > this.MAX_LENGTH) {
      event.stopImmediatePropagation();
      return value.substring(0, this.MAX_LENGTH);
    }

    if (newValue.length <= 7) {
      return newValue.replace(REGEX_CNJ_UM.regex, REGEX_CNJ_UM.replace);
    } else if (newValue.length <= 9) {
      return newValue.replace(REGEX_CNJ_DOIS.regex, REGEX_CNJ_DOIS.replace);
    } else if (newValue.length <= 13) {
      return newValue.replace(REGEX_CNJ_TRES.regex, REGEX_CNJ_TRES.replace);
    } else if (newValue.length <= 14) {
      return newValue.replace(REGEX_CNJ_QUATRO.regex, REGEX_CNJ_QUATRO.replace);
    } else if (newValue.length <= 16) {
      return newValue.replace(REGEX_CNJ_CINCO.regex, REGEX_CNJ_CINCO.replace);
    } else if (newValue.length <= 20) {
      return newValue.replace(REGEX_CNJ_SEM_FORMATACAO.regex, REGEX_CNJ_SEM_FORMATACAO.replace);
    }
  }
}
