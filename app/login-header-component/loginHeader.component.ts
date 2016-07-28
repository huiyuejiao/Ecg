import { Component, OnInit} from '@angular/core';
@Component({
    selector:'loginHeader',
    templateUrl: 'app/login-header-component/loginHeader.component.html',
    styleUrls: ['app/login-header-component/loginHeader.component.css', 'app/app.css']
})
export class LoginHeaderComponent implements OnInit{
    username:string = "carmanah-dev";
    constructor(
        ) {}
        
        
   ngOnInit(){

//       this.username=localStorage.getItem("userInfo").userName;
     
   }
   userLogout(event:any){
       event.preventDefault();
   }
       
}