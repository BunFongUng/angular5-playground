import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// load angularfire modules.
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// load components.
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';

// load services.
import { TodoService } from './services/todo.service';
import { PostService } from './services/post/post.service';

// load env configs.
import { environment } from '../environments/environment';
import { PostFormComponent } from './components/post-form/post-form.component';

// app routes
const appRoutes: Routes = [
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoFormComponent,
    PostsComponent,
    PostComponent,
    PostFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
