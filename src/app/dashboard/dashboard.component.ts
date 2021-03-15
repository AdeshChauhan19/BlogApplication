import { Component, OnInit } from '@angular/core';

import {NgForm, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogService} from '../shared/blog.service'
import { Blog } from '../shared/blog.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {UserService} from '../shared/user.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  serverErrorBlog:String
  credentials:any
  message:any;
  array:any;
  public blogdata:any;
  currentUrl;
  updateblog;
  constructor(public blogService:BlogService,public router:Router,public http:HttpClient,public userService:UserService, public route:ActivatedRoute) { }

 

  ngOnInit() {
    let response = this.blogService.getBlog();
    response.subscribe((data) => {
    this.credentials=data;
  });
  }

  blog:Blog=new Blog("","");
  public writeBlog(){
    if(this.blog.title && this.blog.description){
      
      
      let response=this.blogService.postBlog(this.blog);
      response.subscribe((data)=>
      {
        this.message=data
        Swal.fire({
          icon: 'success',
          text: 'Your Blog has been posted',
        })
        this.ngOnInit();
      }
      )
    }
    else{
      if(!this.blog.title && !this.blog.description){
        Swal.fire({
          icon: 'error',
          text: 'Please provide title and description',
        })
      }
      else if(!this.blog.title){
        Swal.fire({
          icon: 'error',
          text: 'Please provide title',
        })
        }
      else{
        Swal.fire({
          icon: 'error',
          text: 'Please provide Description',
        })
        
      }
    }
    
    this.blog.title='';
    this.blog.description='';
    this.ngOnInit();
  }


   onDelete(card){
     this.blogService.getDeleteBlog(card._id).subscribe(data=>{
      Swal.fire({
        icon: 'success',
        text: 'Your Blog has been Deleted',
      })
      this.ngOnInit();
    })
  
  }

  onEditPost(_id, value){
    console.log(_id,value);
    
  }

  onHome(){
    this.router.navigateByUrl('/Blog');
  }

  onLogout(){
    this.userService.deleteToken()
    this.router.navigateByUrl('/login');
  }

 }
