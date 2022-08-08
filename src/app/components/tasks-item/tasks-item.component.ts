import { Component, OnInit ,Input, Output ,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Output() onDoneTask: EventEmitter<Task> = new EventEmitter();
@Input() task!:Task;
faTimes=faCheckCircle;
  constructor() { }

  ngOnInit(): void {
  }

  onDone(task: any){
    this.onDoneTask.emit(task);
  }
}
