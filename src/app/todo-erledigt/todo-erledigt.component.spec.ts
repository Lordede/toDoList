/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoErledigtComponent } from './todo-erledigt.component';

describe('TodoErledigtComponent', () => {
  let component: TodoErledigtComponent;
  let fixture: ComponentFixture<TodoErledigtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoErledigtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoErledigtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
