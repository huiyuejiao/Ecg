import { Component, OnInit} from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar-component/navigationBar.component';
@Component({
    selector:'my-aboutUs',
    templateUrl: 'app/about-us-component/aboutUs.component.html',
    styleUrls: [ 'app/app.css','app/about-us-component/aboutUs.component.css'],
    directives: [NavigationBarComponent],
})
export class AboutUsComponent implements OnInit{

    constructor(
        ) {}
        
        
   ngOnInit(){

     
   }

}