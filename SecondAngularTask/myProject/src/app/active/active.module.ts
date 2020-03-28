import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';



@NgModule({
  declarations: [ActiveUserComponent],
  imports: [
    CommonModule
  ],
  exports: [ActiveUserComponent]
})
export class ActiveModule { }
