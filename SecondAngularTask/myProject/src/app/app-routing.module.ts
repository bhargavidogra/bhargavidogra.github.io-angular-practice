import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveUserComponent } from './active/active-user/active-user.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'active', component: ActiveUserComponent },
    { path: 'delete', component: DeletedUserComponent },
    {
        path: 'manageUsers', 
        loadChildren: ()=> import('./manage/manage.module').then(
            (file) => file.ManageModule
        )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}