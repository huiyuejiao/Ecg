import { Component, OnInit } from '@angular/core';
import {Router,  ROUTER_DIRECTIVES } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar-component/navigationBar.component';
@Component({
    selector: 'patient-main',
    templateUrl: 'app/patient-main-component/patientMain.component.html',
    styleUrls: ['app/app.css', 'app/patient-main-component/patientMain.component.css'],
    directives: [ROUTER_DIRECTIVES,NavigationBarComponent],
})
export class PatientMainComponent implements OnInit {
    

    constructor(

    ) {

    }
    ngOnInit() {

    }
}