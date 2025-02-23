import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    //courses = COURSES;
    //courses = [];   //Testing Empty Array
    //courses: Course[] = []; // Initialize with an empty array or fetch from a service
    courses: Course[] = [...COURSES]; // Initialize with an empty array or fetch from a service
    
    // coreCourse = COURSES[0];
    // rxjsCourse = COURSES[1];
    // ngrxCourse = COURSES[2];

    // onCardClicked() {
    //     console.log('App componenet - Card was clicked');
    // }

    startDate = new Date(2000, 0, 1);

    title =  COURSES[0].description;

    price = 9.99;
    rate = 0.67;

    onCourseSelected(course:Course)  {
        console.log('App component - Course was selected', course);
    }

}
