import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase'
})
export class MytitlecasePipe implements PipeTransform {

  transform(value: string): string {

    const words = value.split(" ")
    const tcaseWords = words.map(word => word.charAt(0).toUpperCase()+word.slice(1))
    return tcaseWords.join(" ")    
  }

}
