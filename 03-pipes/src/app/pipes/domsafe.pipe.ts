import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domsafe'
})
export class DomsafePipe implements PipeTransform {
  constructor(private domsanitizer:DomSanitizer){

  }
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domsanitizer.bypassSecurityTrustResourceUrl(value);
  }
  
}
