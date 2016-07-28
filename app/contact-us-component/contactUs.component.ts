import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer-component/footer.component';
import { NavigationBarComponent } from '../navigation-bar-component/navigationBar.component';
import { MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
@Component({
    selector: 'contact-us',
    templateUrl: 'app/contact-us-component/contactUs.component.html',
    styleUrls: ['app/app.css','app/contact-us-component/contactUs.component.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES,FooterComponent,NavigationBarComponent],
    inputs: ['contactUsDivShow']
})
export class ContactUsComponent{
    @Output() contactFormShowChange = new EventEmitter();
    contactUsDivShow: boolean = false;
    onClickCancel(){
      this.contactUsDivShow= false;
      this.contactFormShowChange.emit({
          value:this.contactUsDivShow,
      });
    }
    lat: number = 48.43434715694229;
    lng: number = -123.3803765103221;
    mapClicked(e: any) {// get loctaion,lat and lng when user click on map and set it to localstorage
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
    }
}