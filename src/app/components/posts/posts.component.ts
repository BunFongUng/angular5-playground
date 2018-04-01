import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPostList().subscribe(res => {
      this.posts = res.data;
    });
  }
}
