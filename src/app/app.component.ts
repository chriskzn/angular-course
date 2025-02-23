import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'angular-course';
  //title = 'Angular Core Deep Dive';
  //courseTitle = 'Angular Core Deep Dive';
  data = {
    title: 'Angular Core Deep Dive',
  };

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle:string) {
    //alert('Enter key was pressed');
    this.data.title = newTitle;
  }

}
