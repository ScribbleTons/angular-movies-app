import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'profit' })
    
export class ProfitPipe implements PipeTransform {
  transform(value: number, percentage = 10): string {
    return (value * (percentage / 100)).toFixed(2);
  }
}
4