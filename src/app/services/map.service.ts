import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {GeoJson} from '../map';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapService {

  constructor(private db: AngularFireDatabase) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  getMarkers(): Observable<any> {
    return this.db.list('/markers').valueChanges();
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers').push(data);
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove();
  }
}



