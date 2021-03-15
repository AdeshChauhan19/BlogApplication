import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userService:UserService,public router:Router){} 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.userService.isLoggedIn()){
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
  
}
