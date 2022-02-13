import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-offen',
  templateUrl: './todo-offen.component.html',
  styleUrls: ['./todo-offen.component.scss']
})
export class TodoOffenComponent implements OnInit {
  @Input() title = "";
  @Output() toDoDoneEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toDoDone(){
    this.toDoDoneEvent.emit(this.title);
  }

}
