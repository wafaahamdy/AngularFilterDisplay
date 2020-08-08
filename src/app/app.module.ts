import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { RoleFilterPipe } from './filterPipe';
 
@NgModule({
  declarations: [
    AppComponent,
    ListFilterComponent ,
    RoleFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
