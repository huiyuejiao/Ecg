import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar-component/navigationBar.component';
import { HeaderComponent } from '../header-component/header.component';
@Component({
    selector:'my-products',
    templateUrl: 'app/products-component/products.component.html',
    styleUrls: [ 'app/app.css','app/products-component/products.component.css',],
    directives: [NavigationBarComponent,HeaderComponent],
})
export class ProductsComponent implements OnInit{

    constructor(
        ) {}
        
        
   ngOnInit(){

     
   }

}