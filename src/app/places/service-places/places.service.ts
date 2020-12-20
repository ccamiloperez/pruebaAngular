import { Place } from './../../_model/place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: ['awesome place', 'wonderful experience']
    },
    {
      id: '3',
      title: 'Chinese wall',
      imageURL: 'https://www.hola.com/imagenes/viajes/20181127133592/claves-visitar-muralla-china/0-623-688/muralla-china-t.jpg',
      comments: []
    }
  ];

  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string){
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  addPlace(title: string, imageURL: string){
    this.places.push(
      {
        title,
        imageURL,
        comments: [],
        id: this.places.length + 1 + ''
      });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}
