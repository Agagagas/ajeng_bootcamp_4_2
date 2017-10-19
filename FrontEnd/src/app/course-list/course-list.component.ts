import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { CourseserviceService } from "../courseservice.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private http:Http, private data:CourseserviceService) { }

  ngOnInit() {
    this.data.courseList
  }

  tambah(index) : void{
    //fungsi add course to table nilai dimana ada data mahasiswa dan coursenya
  }

  course_code : string;
  course_name : string;

  AddCourse() : void{
    if (this.course_code != "", this.course_name != ""){
      var course : object = {"course_code" : this.course_code, "course_name" : this.course_name}
      this.data.courseList.push(course);
      this.course_code = "";
      this.course_name = "";
    }
  }

}
