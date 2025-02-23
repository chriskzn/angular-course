import { Component, Input } from '@angular/core';
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

}
