import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages
  constructor(public userService:UserService,public router:Router) { }

  
  model={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }

  
  onSubmit(form:NgForm){
    this.userService.loginAdmin(form.value).subscribe(
        res=>{
          this.userService.setToken(res['admintoken']);
          this.router.navigateByUrl('/dashboardAdmin')
        },
        err=>{
          this.serverErrorMessages=err.error.message;
        }
      )
    }
}
