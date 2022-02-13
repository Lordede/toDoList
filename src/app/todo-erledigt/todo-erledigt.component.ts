import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-erledigt',
  templateUrl: './todo-erledigt.component.html',
  styleUrls: ['./todo-erledigt.component.scss']
})
export class TodoErledigtComponent implements OnInit {
  @Input() title ="";
  @Output() toDoReOpenEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toDoReOpen(){
    this.toDoReOpenEvent.emit(this.title);
  }

}
