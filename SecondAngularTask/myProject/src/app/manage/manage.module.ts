import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { LazyLoadingUserComponent } from './lazy-loading-user/lazy-loading-user.component';
import { Routes, RouterModule } from '@angular/router';



const manageUserRoutes: Routes = [
  {
      path: '', component: ManageUserComponent, 
      children: [
          { path: ':id', component:  LazyLoadingUserComponent }
      ]
  },
];

@NgModule({
  declarations: [ManageUserComponent, LazyLoadingUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(manageUserRoutes)
  ],
  exports: [ManageUserComponent, LazyLoadingUserComponent]
})
export class ManageModule { }

