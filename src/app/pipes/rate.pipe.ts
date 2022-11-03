import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return "$"+ value.toString() + " /Hr.";
  }

}
