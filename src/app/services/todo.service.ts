import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class TodoService {
  todos: any[];

  constructor(private fireBaseDB: AngularFireDatabase) {
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

  getTodosFromFireBase(): Observable<any[]> {
    return this.fireBaseDB.list('/todos').valueChanges();
  }
}
