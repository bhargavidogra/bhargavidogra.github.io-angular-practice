import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';
import { ActiveUserPipePipe } from './active-user/active-user-pipe.pipe';




@NgModule({
  declarations: [ActiveUserComponent,ActiveUserPipePipe],
  imports: [
    CommonModule
  ],
  exports: [ActiveUserComponent],
  
})
export class ActiveModule { }
