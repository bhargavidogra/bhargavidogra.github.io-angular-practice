import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CardComponent } from './card/card.component';
import { InputdemoComponent } from './inputdemo/inputdemo.component';
import { OutputdemoComponent } from './outputdemo/outputdemo.component';
import { AttributedirectiveDirective } from './attributedirective.directive';
import { ViewChildDemoComponent } from './view-child-demo/view-child-demo.component';
import { ContentDemoComponent } from './content-demo/content-demo.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, CardComponent, InputdemoComponent, OutputdemoComponent, AttributedirectiveDirective, ViewChildDemoComponent, ContentDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
