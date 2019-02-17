import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImageCircle} from './image.circle/image.circle'
import {CommonModule} from "@angular/common";
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    ImageCircle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
