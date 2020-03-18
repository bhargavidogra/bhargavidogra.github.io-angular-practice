import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
