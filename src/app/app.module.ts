//built in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';


//component imports
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


import {appRoutes} from './routes';
import { UserPostComponent } from './user-post/user-post.component';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';

//Add authguard
import {AuthGuard} from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { EditBlogComponent } from './dashboard/edit-blog/edit-blog.component';
import { ShowBlogComponent } from './main-blog/show-blog/show-blog.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserPostComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    AdminComponent,
    AdminDashboardComponent,
    MainBlogComponent,
    EditBlogComponent,
    ShowBlogComponent,
    ErrorComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},AuthGuard,UserService],
  bootstrap:[AppComponent]

})
export class AppModule { }
