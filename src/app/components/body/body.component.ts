import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('Toggel Test');
  }
  testAgain(){
    console.log('Test Againnnn');
  }
}
