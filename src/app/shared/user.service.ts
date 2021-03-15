import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user.model'


@Injectable({
  providedIn: 'root'
})
export class UserService {
 selectedUser:User={
  name:'',
  email:'',
  password:''
}
  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})}
  constructor(public http:HttpClient) { }

  //http methods
  postUser(user: User){
    return this.http.post('http://localhost:3000/users',user,this.noAuthHeader);
  }

  login(authCredential){
    return this.http.post('http://localhost:3000/users/login',authCredential,this.noAuthHeader)
  }

  getUserProfile(){
    return this.http.get('http://localhost:3000/users/me')
  }

  loginAdmin(authCredentialAdmin){
    return this.http.post('http://localhost:3000/admins/login',authCredentialAdmin)
  }
 


  //helper Methods
setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken(){
    localStorage.removeItem('token');
  }
  
  getUserPayload(){
    var token=this.getToken();
    if(token)
    {
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
    return null;
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if(userPayload)
    return true;
    else
    return false;
  }
}
