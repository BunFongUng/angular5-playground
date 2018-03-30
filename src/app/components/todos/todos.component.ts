import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: any[];

  constructor(private todoService: TodoService) {}

  handleDelete(key: string) {
    this.todoService.deleteTodo(key);
  }

  ngOnInit() {}
}
