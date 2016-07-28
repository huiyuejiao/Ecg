import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-navigation',
    templateUrl: 'app/navigation-bar-component/navigationBar.component.html',
    styleUrls: ['app/app.css', 'app/navigation-bar-component/navigationBar.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationBarComponent implements OnInit {
    

    constructor(

    ) {

    }
    ngOnInit() {

    }
}