import { Component, OnInit } from '@angular/core';

// load services
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[];

  constructor(public todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  handleDelete(todoId: number) {
    this.todos.splice(todoId, 1);
  }

  ngOnInit() {}
}
