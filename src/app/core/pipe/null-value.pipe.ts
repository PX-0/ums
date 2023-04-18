import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nullcase' })
export class NullValuePipe implements PipeTransform {
  transform(value: any | null): any {
    if (!value) {
      return '-';
    } else {
      return value;
    }
  }
}
