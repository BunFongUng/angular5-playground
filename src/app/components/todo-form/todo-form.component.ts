import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() formSubmitEvent = new EventEmitter<any>();
  @Output() formWasSubmittedEvent = new EventEmitter<Boolean>();

  text: string;

  constructor() {}

  onFormSubmit({ value, valid }) {
    if (valid) {
      this.formSubmitEvent.emit(value);
      this.formWasSubmittedEvent.emit(false);
    }
  }

  ngOnInit() {}
}
