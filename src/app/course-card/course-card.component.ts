import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common'; // Import CommonModule (make use of ngClass)


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

  @Input({required:true})
  index: number = 0;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Course card component - Course viewed.');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER',
    };
    // if (this.course.category == 'BEGINNER') {
    //   return ['beginner'];
    // }
  }

}
