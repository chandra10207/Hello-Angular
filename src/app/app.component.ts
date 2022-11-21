import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
    h1{
      color:blue;
    }
    `
  ]
})
export class AppComponent {
  title = 'my-first-app';
  name = "Chandra";
  username = '';
  displayDetails = false;
  displayClickLog = [];

  logDetails(){
    this.displayDetails =  !this.displayDetails;
    // alert("clicked");
    this.displayClickLog.push(this.displayClickLog.length + 1 );
  }


}
