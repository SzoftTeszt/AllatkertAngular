import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortABC'
})
export class SortABCPipe implements PipeTransform {

  transform(array: any, field:string): any {
   array.sort((a:any, b:any)=>
   {
      // if(a[field]>b[field]) return 1;
      // if(a[field]<b[field]) return -1;
      // return 0;
      // return a[field].localeCompare(b[field],'hu',{ sensitivity: 'base' });
      return a[field].localeCompare(b[field],'hu',{sensitivity: 'accent'});
   });
   return array;
  }

}
