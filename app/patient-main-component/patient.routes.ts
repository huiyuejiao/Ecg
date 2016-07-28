import { RouterConfig } from '@angular/router';
import { PatientMainComponent } from './patientMain.component';
import { PatientNotesComponent } from '../patient-notes-component/patientNotes.component';
import { PatientLeaveNoteComponent } from '../patient-leavenote-component/patientLeaveNotes.component';
import { PatientEcgComponent } from '../patient-ecg-component/patientEcg.component';
import { PatientDoctorsComponent } from '../patient-doctors-component/patientDoctors.component';
import { PatientCommentsComponent } from '../patient-comments-component/patientComments.component';
import { PatientDasboardComponent } from '../patient-dashboard-component/patientDashboard.component';
import { LoginSignupComponent } from '../login-signup-component/loginSignup.component';
import { UserProfileComponent } from '../user-profile-component/userProfile.component';
export const patientRoutes: RouterConfig = [
  {
    path: 'patient',
    component: PatientMainComponent,
    children: [
      { path: 'ecg', component: PatientEcgComponent },
      { path: 'notes', component: PatientNotesComponent },
      { path: 'leave_note', component: PatientLeaveNoteComponent },
      { path: 'doctors', component: PatientDoctorsComponent },
      { path: 'comments', component: PatientCommentsComponent },
      { path: 'dashboard', component: PatientDasboardComponent },
      { path: 'profile', component: UserProfileComponent },  ]
  },
  {
    path: 'login',component: LoginSignupComponent
  }
];