import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  photos = [];
  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.getPhotos().subscribe(data => {
      this.photos = data;
      console.log('🚀 ~ file: home.page.ts ~ line 17 ~ HomePage ~ this.photosService.getPhotos ~ data', data);
    });
  }
}
