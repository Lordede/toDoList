/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoOffenComponent } from './todo-offen.component';

describe('TodoOffenComponent', () => {
  let component: TodoOffenComponent;
  let fixture: ComponentFixture<TodoOffenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoOffenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOffenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
