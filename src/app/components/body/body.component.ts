import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  showAddTask!:boolean;
  subscription!: Subscription;


  constructor(private uiServes:UiService) { 
    this.subscription = this.uiServes.onToggle()
    .subscribe(
      value => this.showAddTask =value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServes.toggelAddTask();
  }

}
