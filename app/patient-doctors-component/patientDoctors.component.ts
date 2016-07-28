import { Component, OnInit } from '@angular/core';
import { DataTableDirectives} from 'angular2-datatable/datatable';
import { SearchPipe} from './search-pipe';
@Component({
    selector: 'patient-doctors',
    templateUrl: 'app/patient-doctors-component/patientDoctors.component.html',
    styleUrls: ['app/app.css', 'app/patient-doctors-component/patientDoctors.component.css'],
    directives: [DataTableDirectives],
    pipes:[SearchPipe],
})
export class PatientDoctorsComponent implements OnInit {
    
    private data: any;
    constructor(

    ) {

    }
    ngOnInit() {
        this.data=[
            {
              username:"lision",
              name:"Vision li",
              hospital:"General Hospital",
              tel:"423456",
              patients:1,
              connectedDate:"1992-01-01",
                
            },
            {
              username:"vision",
              name:"uision li",
              hospital:"yeneral Hospital",
              tel:"123456",
              patients:2,
              connectedDate:"1994-01-01",
            }
            ,
            {
              username:"gision",
              name:"Vision li",
              hospital:"General Hospital",
              tel:"123456",
              patients:1,
              connectedDate:"1992-01-01",
            }
            ,
            {
              username:"vision",
              name:"Vision li",
              hospital:"General Hospital",
              tel:"123456",
              patients:1,
              connectedDate:"1992-01-01",
            }
            ,
            {
              username:"vision",
              name:"Vision li",
              hospital:"General Hospital",
              tel:"123456",
              patients:1,
              connectedDate:"1992-01-01",
            }
            ,
            {
              username:"vision",
              name:"Vision li",
              hospital:"General Hospital",
              tel:"123456",
              patients:1,
              connectedDate:"1992-01-01",
            }
        ]
    }
}