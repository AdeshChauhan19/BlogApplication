import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogService} from '../shared/blog.service'
import { Blog } from '../shared/blog.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {UserService} from '../shared/user.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  credentials:any
  constructor(public blogService:BlogService,public router:Router,public http:HttpClient,public userService:UserService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    let response = this.blogService.getAllBlog();
    response.subscribe((data) => {
    this.credentials=data;
  });
  }
  onLogout(){
    this.userService.deleteToken()
    this.router.navigateByUrl('/login');
  }
  onApproved(card){
    this.blogService.getApprovedBlog(card._id).subscribe((data)=>{
      Swal.fire({
        icon: 'success',
        text: 'Blog Updated',
      })
      this.ngOnInit();
    })
    
    
  }

}
