import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
})
export class FirstPipePipe implements PipeTransform {
  transform(value: string): string {
    const byPipe = ' (change by Pipe)';
    return value + byPipe;
  }
}
