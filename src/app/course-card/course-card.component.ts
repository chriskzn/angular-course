import { Component, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  //courses:
  @Input()
  //title: string = '';
  course!:Course;    // Use ! to indicate that this will be initialized later

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Course card component - Course viewed.');
    this.courseSelected.emit(this.course);
  }

}
