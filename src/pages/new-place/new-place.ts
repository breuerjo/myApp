import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';


@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navCtrl: NavController)  {
  }

  onAddPlace(value: {title: string}) {      //Bekommt JS-Objekt mit einem Title(String) => das ist das Form, das übergeben wird 
    this.placesService.addPlace(value);
    this.navCtrl.pop();                     //vorherige Seite aus Stack holen => zurück zur vorherign Seite navigieren
  }

}
