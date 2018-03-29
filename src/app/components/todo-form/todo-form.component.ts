import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter<any>();
  @Output() createNewTodo = new EventEmitter<Boolean>();

  text: string;

  constructor() {}

  handleFormSubmit({ value, valid }) {
    if (valid) {
      console.log(value);
      this.createNewTodo.emit(false);
    }
  }

  ngOnInit() {}
}
