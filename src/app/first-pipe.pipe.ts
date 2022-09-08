import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe'
})
export class FirstPipePipe implements PipeTransform {

  transform(value: string): string {
    const byPipe: string = " (change by Pipe)";
    return value + byPipe;
  }

}
