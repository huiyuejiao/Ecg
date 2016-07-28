import { Component, OnInit} from '@angular/core';
@Component({
    selector:'my-header',
    templateUrl: 'app/header-component/header.component.html',
    styleUrls: ['app/header-component/header.component.css', 'app/app.css']
})
export class HeaderComponent implements OnInit{
    constructor(
        ) {}
        
        
   ngOnInit(){

//       this.username=localStorage.getItem("userInfo").userName;
     
   }


       
}