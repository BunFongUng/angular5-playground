import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  showForm = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.postService.getPostList().subscribe(res => {
      this.posts = res.data;
    });
  }

  showPostForm() {
    this.showForm = !this.showForm;
  }

  formWasSubmitted(data: boolean) {
    this.showForm = data;
  }

  onFormSubmit(formData: any) {
    this.postService.createNewPost(formData).subscribe(res => {
      if (res.status === 'success') {
        this.getPostList();
      }
    });
  }
}
