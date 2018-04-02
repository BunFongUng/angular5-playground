import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() deletePostEvent = new EventEmitter<string>();

  @Input() index: number;
  @Input() post: any;

  constructor() {}

  ngOnInit() {}

  handleDelete(id: string) {
    this.deletePostEvent.emit(id);
  }
}
