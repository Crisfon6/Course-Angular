import { Pipe, PipeTransform } from '@angular/core';
import { Listt } from '../models/list.model';

@Pipe({
  name: 'filterFinished',
  pure:false
})
export class FilterFinishedPipe implements PipeTransform {

  transform(lists: Listt[], finished:boolean=true): Listt[] {
    return lists.filter(el=>      el.finished===finished    );

    
  }

}
