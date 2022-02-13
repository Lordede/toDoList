import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-smart',
  templateUrl: './todo-smart.component.html',
  styleUrls: ['./todo-smart.component.scss']
})
export class TodoSmartComponent implements OnInit {
  toDosOffen: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToDo(newToDo: string){
    this.toDosOffen.push(newToDo);
    console.log(newToDo);
  }

}
