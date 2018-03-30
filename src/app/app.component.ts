import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';

// load service
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFormCreateTodo: Boolean = false;
  todos: any[];

  constructor(private todoService: TodoService) {
    this.todoService.getTodosFromFireBase().subscribe(data => {
      this.todos = data.map(item => {
        return {
          ...item.payload.toJSON(),
          key: item.key
        };
      });
    });
  }

  showFormCreate(event: Boolean) {
    this.showFormCreateTodo = !this.showFormCreateTodo;
  }

  createNewTodo(todo: any) {
    const todoId = this.todos.length + 1;

    const body = {
      id: todoId,
      text: todo.todoText
    };

    this.todoService.createNewTodo(body);
  }
}
