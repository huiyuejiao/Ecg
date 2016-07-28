import { Component, OnInit } from '@angular/core';
import { DataTableDirectives} from 'angular2-datatable/datatable';

@Component({
    selector: 'patient-notes',
    templateUrl: 'app/patient-notes-component/patientNotes.component.html',
    styleUrls: ['app/app.css', 'app/patient-notes-component/patientNotes.component.css'],
    directives: [DataTableDirectives],
})
export class PatientNotesComponent implements OnInit {
    
    private data: any;
    constructor(

    ) {

    }
    ngOnInit() {
         this.data=[
            {                 
              content:"test",
              time:"2016-07-25 12:41:00",
              test:"2016-07-25 12:41:00",
              record:"2016-07-25 12:41:00",
              created:"2016-07-25 12:41:00",
            },
            {                 
              content:"had beta blocker",
              time:"2016-07-25 12:41:00",
              test:"2016-07-25 12:41:00",
              record:"2016-07-25 12:41:00",
              created:"2016-07-25 12:41:00",
            }]
    }
}