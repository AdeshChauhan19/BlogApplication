import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  userDeatils;
 
  
  
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDeatils=res
      },
      err=>{

      }
    )
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
