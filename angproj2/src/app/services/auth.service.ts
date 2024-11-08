import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false;
   
  dbUsers = [ //get the users list from users json / users table 
    { "userName":"admin", "password":"admin"},
    { "userName":"chiru", "password":"chiru"}
  ]

  login(inputUserName:string, inputPswd:string){
    if(this.dbUsers.find(user => user.userName ==inputUserName && user.password===inputPswd)){
      this.isAuthenticated = true;
      this.router.navigate(['/home'])
    }
    else{
      alert('You are not authenticatd user. Please register')
      this.isAuthenticated = false;
    }
  }

  isAuthenticateUser(){
    return this.isAuthenticateUser
  }

  constructor(private router:Router) { }
}
