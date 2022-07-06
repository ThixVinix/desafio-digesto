import { Pipe, PipeTransform } from '@angular/core';
import { REGEX_CNJ_SEM_FORMATACAO } from 'src/app/compartilhado/utilitario/regex-cnj';

@Pipe({
  name: 'cnj',
})
export class CnjPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(REGEX_CNJ_SEM_FORMATACAO.regex, REGEX_CNJ_SEM_FORMATACAO.replace);
  }
}
