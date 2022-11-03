import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {


    return value.toString() + " Hr" ;
  }

}
