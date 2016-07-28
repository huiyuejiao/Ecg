
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {LoginSignupService} from './login-signup-component/loginSignup.service';
import { AuthGuard }   from './auth-guard-component/auth-guard.service';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.router';
import { Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(),APP_ROUTER_PROVIDERS, GOOGLE_MAPS_PROVIDERS, HTTP_PROVIDERS,AuthGuard,LoginSignupService]).catch(err => console.error(err));