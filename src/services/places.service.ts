export class PlacesService {        //Service um die Places zu speichern und zu holen
    private places: {title: string}[] = [];         //speichert ein Array mit JS-Objekts
     addPlace(place: {title: string}) {
         this.places.push(place);


     }
     getPlaces() {
         return this.places.slice();        //macht eine Kopie aus dem Array und gibt dieses zurück
     }
}