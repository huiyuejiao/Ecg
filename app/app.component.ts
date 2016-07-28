import { Component } from '@angular/core';
import { ProjectNameComponent } from './project-name-component/projectName.component';
import { LoginHeaderComponent } from './login-header-component/loginHeader.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginSignupService} from '../app/login-signup-component/loginSignup.service';
import { FooterComponent} from './footer-component/footer.component';
import { HeaderComponent } from './header-component/header.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,LoginHeaderComponent,FooterComponent,HeaderComponent],
    providers: [LoginSignupService],
    precompile: [ProjectNameComponent]
})
export class AppComponent {
}
