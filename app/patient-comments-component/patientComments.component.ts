import { Component, OnInit } from '@angular/core';
import { DataTableDirectives} from 'angular2-datatable/datatable';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'patient-comments',
    templateUrl: 'app/patient-comments-component/patientComments.component.html',
    styleUrls: ['app/app.css', 'app/patient-comments-component/patientComments.component.css'],
    directives: [DataTableDirectives,DATEPICKER_DIRECTIVES, NgModel],
})
export class PatientCommentsComponent implements OnInit {
    
    private data: any;
    fromCalendarShow:boolean=false;
    toCalendarShow:boolean=false;
    public dt:Date = new Date();
    public date:Date = new Date();
    constructor(

    ) {

    }
    ngOnInit() {
      this.data=[
            {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01",            
            },
            {
              username:"vision",
              content:"Seems normal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01",            
            },   
            {
              username:"vision",
              content:"Seems normal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01",            
            },          
            ]
    }
    onClickFromCalendarShow(){
        this.fromCalendarShow=!this.fromCalendarShow;
    }
    onClickToCalendarShow(){
        this.toCalendarShow=!this.toCalendarShow;
    }
    geToDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
    }
    getFromDate():number {
    return this.date && this.date.getTime() || new Date().getTime();
    }
}