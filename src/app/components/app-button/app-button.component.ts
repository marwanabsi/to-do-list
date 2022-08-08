import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {

  @Input() text :string="";
  @Input() color: string="";

  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }



}
