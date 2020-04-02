import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { LazyLoadingUserComponent } from './lazy-loading-user/lazy-loading-user.component';
import { Routes, RouterModule } from '@angular/router';
import { ConcatNamePipe } from './lazy-loading-user/concat-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveUpdateFormComponentComponent } from '../user-reactive-form/reactive-update-form-component/reactive-update-form-component.component';
import { UserReactiveFormModule } from '../user-reactive-form/reactive-form.module';



const manageUserRoutes: Routes = [
  {
      path: '', component: ManageUserComponent, 
      children: [
          { path: ':id', component:  LazyLoadingUserComponent },
          { path : 'editUsers/:id', component :ReactiveUpdateFormComponentComponent}
      ]
  },
];

@NgModule({
  declarations: [ManageUserComponent, LazyLoadingUserComponent, ConcatNamePipe],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,UserReactiveFormModule,
    RouterModule.forChild(manageUserRoutes)
  ],
  exports: [ManageUserComponent, LazyLoadingUserComponent]
})
export class ManageModule { }

