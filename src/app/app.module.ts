import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, listOfRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    listOfRoutes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
