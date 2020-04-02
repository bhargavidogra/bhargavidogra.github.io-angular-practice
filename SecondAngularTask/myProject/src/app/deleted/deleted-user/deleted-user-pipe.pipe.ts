import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletedUserPipe'
})
export class DeletedUserPipePipe implements PipeTransform {

  transform(value: any[]): unknown {
    return value.filter((item)=>{
      return item.isDeleted;
    });
  }

}
