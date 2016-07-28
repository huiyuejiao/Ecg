import { Component, OnInit } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { User } from '../data/user';
import { Router } from '@angular/router';
import { LoginSignupService } from './loginSignup.service';
import * as moment from 'moment';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'my-login',
    templateUrl: 'app/login-signup-component/loginSignup.component.html',
    styleUrls: ['app/app.css', 'app/login-signup-component/loginSignup.component.css'],
    directives: [ AlertComponent, DATEPICKER_DIRECTIVES, NgModel]
})
export class LoginSignupComponent implements OnInit {
    public user = new User();
    public dt:Date = new Date();
    public date:any= this.getDate();
    errorMsg: string;
    response:string;
    calendarShow:boolean=false;
    patientLoginShow:boolean=true;
    patientSignupShow:boolean=true;
    constructor(
        private router: Router,
        private http:Http,
        private _service: LoginSignupService
    ) {

    }
    ngOnInit() {

    }
    patientLogin(){
        this.patientLoginShow=!this.patientLoginShow;
    }
    patientSignup(){
        this.patientSignupShow=!this.patientSignupShow;
    }
    public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
    }
    login() {
        this.user.setUserName = "carmanah";
        var body: string = JSON.stringify({username: "liwanbo",password:"123456"});
        console.log(body);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http
            .post('http://ecg.ece.uvic.ca/rest/patient/login',
            body, {
                headers: headers
            })
            .map(response => response.json())
            .subscribe(
            response => {this.response=response;console.log(response)}
            );
    }
    signup() {

    }
    onclickHelp() {
        this.router.navigate(['/contact']);
    }
    onClickCalendarShow(){
        this.calendarShow=!this.calendarShow;
    }
}