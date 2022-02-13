import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-smart',
  templateUrl: './todo-smart.component.html',
  styleUrls: ['./todo-smart.component.scss']
})
export class TodoSmartComponent implements OnInit {
  toDosOffen: string[] = [];
  toDosErledigt: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addToDo(newToDo: string){
    this.toDosOffen.push(newToDo);
  }

  moveToDoToErledigt(toDo: string){
     let pos = this.toDosOffen.indexOf(toDo);
     this.toDosOffen.splice(pos, 1);

     this.toDosErledigt.push(toDo);
  }

  moveToDoToOffen(toDo: string){
    let pos = this.toDosErledigt.indexOf(toDo);
    this.toDosErledigt.splice(pos, 1);

    this.toDosOffen.push(toDo);
  }

}
