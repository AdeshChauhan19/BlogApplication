import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this.userService.deleteToken()
    this.router.navigateByUrl('/login');
  }
}

