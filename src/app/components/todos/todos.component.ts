import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: any[];

  constructor() {}

  handleDelete(todoId: number) {
    this.todos.splice(todoId, 1);
  }

  ngOnInit() {}
}
