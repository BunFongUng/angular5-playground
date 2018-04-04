import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: string;
  post: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param.id;
    });

    this.postService.getPostDetail(this.id).subscribe(res => {
      if (res.status === 'success') {
        this.post = res.data;
      }
    });
  }
}
