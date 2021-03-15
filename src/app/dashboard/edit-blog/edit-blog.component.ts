import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BlogService} from '../../shared/blog.service'
import { Blog } from '../../shared/blog.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  currentUrl;
  check:any;
  blog:Blog=new Blog('','');
  // model={
  //   title:'',
  //   description:''
  // }
  
  constructor(public blogService:BlogService,public activatedRoute: ActivatedRoute,private router: Router,public userService:UserService) { }
  
  ngOnInit(): void {
    this.currentUrl = this.activatedRoute.snapshot.params; // When component loads, grab the id
    // Function to GET current blog with id in params
    this.blogService.getBlogById(this.currentUrl.id).subscribe(data => {
      // Check if GET request was success or not
      this.check = data;
      this.blog=this.check
      console.log(this.blog);
      
      // Save blog object for use in HTML
});

  }

  // updateblog:Blog=new Blog("");
  updateBlogSubmit(){
    
    this.blogService.getUpdatePost(this.currentUrl.id,this.blog).subscribe((data)=>{
      Swal.fire({
        icon: 'success',
        text: 'Blog Updated',
      })
    })
    setTimeout(() => {
      this.router.navigate(['/dashboard']); // Navigate back to route page
    },1500);
    
    
  }
  onLogout(){
    this.userService.deleteToken()
    this.router.navigateByUrl('/login');
  }
}
