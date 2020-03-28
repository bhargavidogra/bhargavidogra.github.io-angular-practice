import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { UserService } from './user.service';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { AttributeisActiveDirective } from './attributeis-active.directive';


@NgModule({
  declarations: [
    AppComponent,HomeComponent, AttributeDirectiveDirective, AttributeisActiveDirective 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ActiveModule,
    DeletedModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
