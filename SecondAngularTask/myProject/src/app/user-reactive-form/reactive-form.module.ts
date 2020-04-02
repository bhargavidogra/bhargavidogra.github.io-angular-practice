import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveUpdateFormComponentComponent } from './reactive-update-form-component/reactive-update-form-component.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveCreateFormComponent } from './reactive-create-form/reactive-create-form.component';



@NgModule({
  declarations: [ReactiveUpdateFormComponentComponent, ReactiveCreateFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveUpdateFormComponentComponent,
  ]
})
export class UserReactiveFormModule { }
