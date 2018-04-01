import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() formWasSubmitted = new EventEmitter<boolean>();
  @Output() createNewPost = new EventEmitter<any>();

  post: any = {
    title: null,
    link: null
  };

  constructor() {}

  ngOnInit() {}

  onFormSubmit({ value, valid }) {
    if (valid) {
      this.createNewPost.emit(value);
      this.formWasSubmitted.emit(false);
    }
  }
}
