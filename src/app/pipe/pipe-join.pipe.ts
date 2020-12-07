import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeJoin'
})
export class PipeJoinPipe implements PipeTransform {

  transform(value: string[], separator: string): string {
    return value.join(separator);
  }

}
