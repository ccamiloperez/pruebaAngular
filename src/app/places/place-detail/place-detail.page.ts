import { Place } from './../../_model/place.model';
import { PlacesService } from './../service-places/places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute,
              private placesService: PlacesService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace() {
   const alert = await this.alertController.create({
      header: 'are u sure you want to delete it?',
      message: 'Be careful',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.placesService.deletePlace(this.place.id);
          console.log('deleted!!!');
          this.router.navigate(['/places']);
        }
      }
    ]
    });
   await alert.present();
  }

}
