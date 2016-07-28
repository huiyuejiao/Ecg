import { Component, OnInit } from '@angular/core';
import { AlertComponent, DATEPICKER_DIRECTIVES,TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'patient-leavenote',
    templateUrl: 'app/patient-leavenote-component/patientLeaveNotes.component.html',
    styleUrls: ['app/app.css', 'app/patient-leavenote-component/patientLeaveNotes.component.css'],
    directives: [DATEPICKER_DIRECTIVES, NgModel, TimepickerComponent],
})
export class PatientLeaveNoteComponent implements OnInit {
    TimerShow:boolean = false;
    public hstep:number = 1;
    public mstep:number = 15;
    public ismeridian:boolean = true;
    public mytime:Date = new Date();
    calendarOccurredShow:boolean = false;
    public dt: Date = new Date();
    fromCalendarShow: boolean = false;
    public date: Date = new Date();
    constructor(

    ) {

    }
    ngOnInit() {

    }
    onClickOccurredCalendarShow() {
        this.calendarOccurredShow = !this.calendarOccurredShow;
    }
    onClickOccurredTimeShow(){
        this.TimerShow = !this.TimerShow;
    }
    onClickFromCalendarShow() {
        this.fromCalendarShow = !this.fromCalendarShow;
    }
    getOccurredDate():number{
        return this.dt && this.dt.getTime();
    }
    getFromDate(): number {
        return this.date && this.date.getTime();
    }
    changedDate():void{
     console.log('Date changed to: ' + this.date);
    }
    changed():void {
    console.log('Time changed to: ' + this.mytime);
    }
    getTime(){
        return this.mytime.getHours() + ":" + this.mytime.getMinutes()
    }
    
}