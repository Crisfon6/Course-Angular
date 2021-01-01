import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, activate: boolean): string {
    // let pass:string='';
    // for (let index = 0; index < value.length; index++) {      
    //   pass+='*';      
    // }
    // return pass;
    return (activate) ?  value :'*'.repeat(value.length) ;
  }

}
