import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

  myForm: FormGroup;

  constructor(fb: FormBuilder, private http: HttpClient){
    this.myForm = fb.group({
      'word': ['dd']
    });
  }
  makeRequest(keyWord: string):void{
    this.http.get('http://localhost:8080/test').subscribe((data: string) => {
      console.log(data);
    });
  }


}
