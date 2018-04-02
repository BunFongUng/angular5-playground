import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[];
  showForm = false;

  constructor(private todoService: TodoService) {}

  handleDelete(key: string) {
    this.todoService.deleteTodo(key);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  handleFormSubmitted(formData: any) {
    const todoId = this.todos.length + 1;

    const body = {
      id: todoId,
      text: formData.todoText
    };

    this.todoService.createNewTodo(body);
  }

  handleFormWasSubmitted(value: boolean) {
    this.showForm = value;
  }

  ngOnInit() {
    this.todoService.getTodosFromFireBase().subscribe(data => {
      this.todos = data.map(item => {
        return {
          ...item.payload.toJSON(),
          key: item.key
        };
      });
    });
  }
}
