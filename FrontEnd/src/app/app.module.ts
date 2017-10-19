import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';

import { CourseserviceService } from "./courseservice.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component : CourseListComponent},
    ])
  ],
  providers: [CourseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
