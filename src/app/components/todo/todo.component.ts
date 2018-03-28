import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Input() index: number;

  @Output() deleteEventEmit = new EventEmitter<number>();

  constructor() {}

  handleClickDelete(todoId: number) {
    this.deleteEventEmit.emit(todoId);
  }
  ngOnInit() {}
}
