import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-offen',
  templateUrl: './todo-offen.component.html',
  styleUrls: ['./todo-offen.component.scss']
})
export class TodoOffenComponent implements OnInit {
  @Input() title = "";

  constructor() { }

  ngOnInit() {
  }

}
