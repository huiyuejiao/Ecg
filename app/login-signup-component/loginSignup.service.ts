import { Injectable,Injector} from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../data/user';


@Injectable()
export class LoginSignupService {
      user:User = new User();
   
      loggedIn:boolean=false;
      constructor(
         private _router: Router
         ){
             
      }
             
      login(user:User){
          this.user.setUserName="carmanah-dev";    
          var authenticatedUser = this.user;
          if (authenticatedUser){
                 console.log(authenticatedUser);
                 this.loggedIn=true;
                 localStorage.setItem("user", authenticatedUser.getUserName);
                 this._router.navigate(['./project-name']);      
                 return true;
              }
            return false;
 
     }
         
    isLoggedIn() {
  	     let router: Router;
         if(!!localStorage.getItem("user")){
            return true;
         }else{
            return false
         }
  
   }
    
    
}

