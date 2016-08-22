import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrService {
        
    constructor(private _http: Http){
        console.log('Flickr Service Started...');
    }
    
    getPictures(){
        return this._http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3f9fe783e105a01013fbe2d4de25ce17&lat=36.430148&lon=10.692862&format=json&nojsoncallback=1')
            .map(res => res.json().photos.photo);
    }
    
}

