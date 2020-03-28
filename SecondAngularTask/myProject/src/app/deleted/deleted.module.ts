import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';



@NgModule({
  declarations: [DeletedUserComponent],
  imports: [
    CommonModule
  ],
  exports: [DeletedUserComponent] 
})
export class DeletedModule { }
