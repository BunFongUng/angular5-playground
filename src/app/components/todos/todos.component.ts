import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Output() deleteTodo = new EventEmitter<string>();
  @Input() todos: any[];

  constructor(private todoService: TodoService) {}

  handleDelete(key: string) {
    this.deleteTodo.emit(key);
  }

  ngOnInit() {}
}
