import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value !== 'Server Error') {
      const dummy = value.substring(0, 150).split(' ');
      dummy.pop();
      return dummy.join(' ') + '....';
    } else {
      return value;
    }
  }

}
