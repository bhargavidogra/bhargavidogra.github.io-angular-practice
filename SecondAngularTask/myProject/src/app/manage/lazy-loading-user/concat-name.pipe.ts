import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatName'
})
export class ConcatNamePipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    return prefix + ' ' + value;
  }

}
