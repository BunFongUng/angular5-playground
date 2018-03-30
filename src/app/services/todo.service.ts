import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TodoService {
  todos: any[];

  constructor(private fireBaseDB: AngularFireDatabase) {}

  getTodos(): any[] {
    return this.todos;
  }

  getTodosFromFireBase() {
    return this.fireBaseDB.list('/todos').snapshotChanges();
  }

  createNewTodo(todo: string) {
    return this.fireBaseDB.list('/todos').push(todo);
  }

  deleteTodo(key: string) {
    return this.fireBaseDB.list('/todos').remove(key);
  }
}
