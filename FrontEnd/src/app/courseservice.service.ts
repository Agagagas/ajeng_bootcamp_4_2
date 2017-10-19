import { Injectable } from '@angular/core';

@Injectable()
export class CourseserviceService {
  courseList : object[] = [{'course_code' : 'xyz', 'course_name' : 'Web Development'},{'course_code' : 'abc', 'course_name' : 'Mobile Development'},{'course_code' : '123', 'course_name' : 'UI/UX'}];

  constructor() { }

}
