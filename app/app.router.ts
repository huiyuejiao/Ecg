import { provideRouter, RouterConfig,CanActivate } from '@angular/router';
import { ProjectNameComponent } from './project-name-component/projectName.component';
import { ContactUsComponent } from './contact-us-component/contactUs.component';
import { AboutUsComponent } from './about-us-component/aboutUs.component';
import { ProductsComponent } from './products-component/products.component';
import { UserProfileComponent } from './user-profile-component/userProfile.component';
import { PatientMainComponent } from './patient-main-component/patientMain.component';
import { PatientNotesComponent } from './patient-notes-component/patientNotes.component';
import { PatientEcgComponent } from './patient-ecg-component/patientEcg.component';
import { PatientDoctorsComponent } from './patient-doctors-component/patientDoctors.component';
import { PatientCommentsComponent } from './patient-comments-component/patientComments.component';
import { LoginSignupComponent } from './login-signup-component/loginSignup.component';
import { AuthGuard }          from './auth-guard-component/auth-guard.service';
import { patientRoutes } from './patient-main-component/patient.routes';
export const routes: RouterConfig = [
  { path: '', component: LoginSignupComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'project-name', component: ProjectNameComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactUsComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'profile', component: UserProfileComponent},
  ...patientRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];