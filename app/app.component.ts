import { Component } from '@angular/core';
import {InstagramService} from './instagram.service';
import {FlickrService} from './flickr.service';
import {JSONP_PROVIDERS} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      <div class="row">
      <h1>Angular 2 App with Routing</h1>
        <nav>
         <a routerLink="/" routerLinkActive="active">Instagram</a>
         <a routerLink="/users" routerLinkActive="active">News</a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
    providers: [JSONP_PROVIDERS, InstagramService, FlickrService]
})
export class AppComponent { }
