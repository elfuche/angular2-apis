import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
@Injectable()
export class InstagramService {
    
    constructor(private jsonp: Jsonp) {
        console.log('Instagram Service Started...');
    }
    
    getPictures(){

        let url = 'https://api.instagram.com/v1/locations/search?lat=36.430148&lng=10.692862&access_token=3677717895.309a604.1cce1fa4892847c684e492d60f3a417e';

        let params = new URLSearchParams();
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get(url, { search: params }).map(request => request.json().data);
            
    }
    
}
