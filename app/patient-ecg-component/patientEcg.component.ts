import { Component, OnInit } from '@angular/core';
import { DataTableDirectives} from 'angular2-datatable/datatable';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'patient-ecgs',
    templateUrl: 'app/patient-ecg-component/patientEcg.component.html',
    styleUrls: ['app/app.css', 'app/patient-ecg-component/patientEcg.component.css'],
    directives: [DataTableDirectives,DATEPICKER_DIRECTIVES, NgModel],
})
export class PatientEcgComponent implements OnInit {
    
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
              record:"1",
              comment:"0",
              note:"2",
              length:"36 seconds",
              created:"1992-01-01",            
            },
            {
              record:"1",
              comment:"0",
              note:"2",
              length:"36 seconds",
              created:"1992-01-01",           
            },   
            {
              record:"1",
              comment:"0",
              note:"2",
              length:"36 seconds",
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