import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter() ;

  taskName!:string;
  date!:Date;
  done:boolean=false;
  showAddTask!:boolean;
  subscription!: Subscription;


  constructor(private uiServes: UiService) {
    this.subscription = this.uiServes.onToggle()
    .subscribe(
      value => this.showAddTask =value)
   }

  ngOnInit(): void {
  }
  onSubmet(){
    if(!this.taskName){
      alert('Please enter the task name');
      return;
    }
    else if(!this.date){
      alert('Please enter the task Date');
      return;
    }
    const newTask={
      taskName: this.taskName,
      date:this.date,
      done:this.done
    }

    this.onAddTask.emit(newTask);
    
    this.taskName='';
    this.date=new Date();
  }
}
