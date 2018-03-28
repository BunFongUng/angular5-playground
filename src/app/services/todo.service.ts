import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos: any[];

  constructor() {
    this.todos = [
      {
        text: 'Learn Angular 5'
      },
      {
        text: 'Learn ReactJS'
      },
      {
        text: 'Learn VueJS'
      },
      {
        text: 'Learn NodeJS'
      }
    ];
  }

  getTodos(): any[] {
    return this.todos;
  }
}
