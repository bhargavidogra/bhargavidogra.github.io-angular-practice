import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';
import { DeletedUserPipePipe } from './deleted-user/deleted-user-pipe.pipe';



@NgModule({
  declarations: [DeletedUserComponent, DeletedUserPipePipe],
  imports: [
    CommonModule
  ],
  exports: [DeletedUserComponent] 
})
export class DeletedModule { }
