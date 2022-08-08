import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] =[];


  constructor(private taskServes:TaskService) {
    
   }

  ngOnInit(): void {
    this.taskServes.getTasks().subscribe((tasks)=>this.tasks=tasks);
    this.taskServes.getTasks().subscribe(() =>(this.tasks = this.tasks.filter(t=> t.done !== true)));
  }

  doneTask(task:Task){
    
    task.done=true;
    this.taskServes.doneTask(task).subscribe(() =>(this.tasks = this.tasks.filter(t=> t.done !== true)));

  }

  AddTask(task: Task){
    this.taskServes.addTask(task).subscribe((task)=>(this.tasks.push(task)));

  }

}
