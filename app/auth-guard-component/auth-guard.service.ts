import { Injectable }     from '@angular/core';
import { Router,CanActivate }    from '@angular/router';
import { LoginSignupService } from '../login-signup-component/loginSignup.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        protected router: Router, protected loginSignupService: LoginSignupService
        ){

    }
    canActivate(): boolean {

        if (!this.loginSignupService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}