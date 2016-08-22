import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstagramService } from './instagram.service';

@Component({
	selector:'user-app',
	template: `
     <h2>This is Instagram location Nabeul</h2>
     <div class="row">
       <ul>
        <li *ngFor="let item of infos | async">
            {{item.name}}
        </li>
       </ul>           
     </div>
	`,
  providers: [InstagramService]
})

export class UserComponent{ 

private infos:any;

constructor(private _instagramService:InstagramService){
        this.infos=this._instagramService.getPictures();
    }
}