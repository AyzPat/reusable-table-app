import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TableModule} from '@app/app/app.module'
@NgModule({
  imports:      [ BrowserModule,TableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
