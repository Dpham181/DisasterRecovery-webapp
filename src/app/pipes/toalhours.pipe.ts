import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toalhours'
})
export class ToalhoursPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toString + " Hrs.";
  }

}
