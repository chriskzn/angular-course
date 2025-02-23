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

    courses = COURSES;
    
    // coreCourse = COURSES[0];
    // rxjsCourse = COURSES[1];
    // ngrxCourse = COURSES[2];

    // onCardClicked() {
    //     console.log('App componenet - Card was clicked');
    // }

    onCourseSelected(course:Course)  {
        console.log('App component - Course was selected', course);
    }

}
