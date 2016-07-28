import { Component, OnInit } from '@angular/core';
import { DataTableDirectives} from 'angular2-datatable/datatable';
@Component({
    selector: 'patient-dashboard',
    templateUrl: 'app/patient-dashboard-component/patientDashboard.component.html',
    styleUrls: ['app/app.css', 'app/patient-dashboard-component/patientDashboard.component.css'],
    directives: [DataTableDirectives],
})
export class PatientDasboardComponent implements OnInit {
    data:any;
    test:any;
    commentData:any;
    constructor(

    ) {

    }
    ngOnInit() {
        this.test=["Asa","Ads"];
        this.data=[
            {
              length:"36 seconds",
              created:"1992-01-01 01:20:20",            
            },
            {
              length:"36 seconds",
              created:"1992-01-01 01:20:20",           
            },   
            {
              length:"36 seconds",
              created:"1992-01-01 01:20:20",          
            },          
            ];
         this.commentData=[
             {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
             {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
             {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
                         {
              username:"vision",
              content:"Seems abnormal",
              records:"2016-03-14 03:30:02",
              notes:"123456",
              created:"1992-01-01 01:20:20",            
            },
            
         ]; 
    }
}