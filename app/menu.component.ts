import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlickrService } from './flickr.service';
@Component({
	selector:'menu-app',
	template: `
    <h2>This is the menu of {{name}}</h2>
    <div class="row">
      <div class="col-md-4">
        <div *ngFor='let picture of pictures'>
         <div class="col-lg-4">
           <img src="http://farm{{picture.farm}}.staticflickr.com/{{picture.server}}/{{picture.id}}_{{picture.secret}}.jpg">
         </div>
        </div>     
      </div>
    </div>
	`,
  providers: [FlickrService]
})

export class MenuComponent{ 
   name:any;
   pictures:any;

   constructor(private _flickrService:FlickrService){
     this.name = "Filckr";
     this._flickrService.getPictures().subscribe(pictures => {
            this.pictures= pictures;
        });  
    }
}
