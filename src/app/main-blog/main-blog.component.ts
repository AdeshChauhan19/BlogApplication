import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../shared/blog.model';
@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css'],
})
export class MainBlogComponent implements OnInit {
  demos: Blog[] = []; //For making description less
  credentials: any;
  title: String;
  description: String;
  constructor(
    public blogService: BlogService,
    public userService: UserService,
    public router: Router
  ) {}
  ngOnInit(): void {
    let response = this.blogService.getApprovedPost();
    response.subscribe((data) => {
      this.credentials = data;
      //making description less
      for (let i = 0; i < this.credentials.length; i++) {
        let credential = {
          id: this.credentials[i]._id,
          title: this.credentials[i].title,
          description:
            this.credentials[i].description.substring(0, 50) +
            '.....................',
        };
        this.demos.push(credential);
      }
    });
  }

  Logout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
