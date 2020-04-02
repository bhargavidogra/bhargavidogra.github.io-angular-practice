import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeUserPipe'
})
export class ActiveUserPipePipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter((item)=>{
      return !item.isDeleted;
    });
  }

}
