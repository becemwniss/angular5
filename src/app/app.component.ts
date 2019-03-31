import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // keyWord: string;

  makeRequest(keyWord: string):void{
    console.log("this is a test ", keyWord);
  }


}
