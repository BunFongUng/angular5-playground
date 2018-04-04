import { Routes } from '@angular/router';

import { TodosComponent } from '../components/todos/todos.component';
import { PostsComponent } from '../components/posts/posts.component';
import { HomeComponent } from '../components/home/home.component';
import { TodoDetailComponent } from '../components/todo-detail/todo-detail.component';
import { PostDetailComponent } from '../components/post-detail/post-detail.component';
import { PostFormComponent } from '../components/post-form/post-form.component';

export const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todos/:id',
    component: TodoDetailComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'posts/edit/:id',
    component: PostFormComponent
  }
];
