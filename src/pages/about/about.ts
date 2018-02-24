import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';            //Navigation Controller => zum Navigieren benötigt
import { NewPlacePage } from '../new-place/new-place';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  places: {title: string}[] = [];

  constructor(public navCtrl: NavController, private placesService: PlacesService) {

    
  }
  ionViewWillEnter() {  //wird ausgeführt, wenn man auf diese Seite navigiert
      this.places = this.placesService.getPlaces();   //diese Page updaten
  }
  
  OnLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);    //Navigieren zur Page
    
  }
  
  
}
