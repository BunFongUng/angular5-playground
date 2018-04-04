import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id: string;

  formEdit = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.id = param.id;
        this.formEdit = true;
        this.postService.getPostDetail(param.id).subscribe(res => {
          if (res.status === 'success') {
            const { title, link } = res.data;
            this.post = { title, link };
          }
        });
      }
    });
  }

  onFormSubmit({ value, valid }) {
    if (valid) {
      if (!this.formEdit) {
        this.createNewPost.emit(value);
        this.formWasSubmitted.emit(false);
        return;
      }

      const body = value;
      this.postService.updatePost(this.id, body).subscribe(res => {
        if (res.status === 'success') {
          this.router.navigate(['posts']);
        }
      });
    }
  }
}
