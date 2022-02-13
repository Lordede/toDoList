import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputField',
  templateUrl: './inputField.component.html',
  styleUrls: ['./inputField.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Output() newToDoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewToDo(value: string){
    this.newToDoEvent.emit(value);
  }

}
