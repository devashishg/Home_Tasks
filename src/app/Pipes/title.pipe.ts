import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const a = value.split('-');
    a.pop();
    return a.join('-') ? a.join('-') : value;
  }

}
