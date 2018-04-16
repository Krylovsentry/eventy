import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapService} from '../../services/map.service';
import {FeatureCollection, GeoJson} from '../../map';
import {VkService} from '../../services/vk.service';


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v9';
  lat = 37.75;
  lng = -122.41;

  markers: any;
  vkEvents: any;

  constructor(private mapService: MapService, private vkService: VkService) {
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers();
    this.vkEvents = this.vkService.getNearEvents();
    this.initializeMap();
  }

  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lng = position.coords.longitude;
        this.lat = position.coords.latitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        });
      });
    }

    this.buildMap();

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
      // const coordinates = [event.lngLat.lng, event.lngLat.lat];
      // const newMarker = new GeoJson(coordinates, {message: this.message});
      // this.mapService.createMarker(newMarker);
      this.vkService.getNearEvents();
    });


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
        markers.forEach(marker => {
          const el = document.createElement('img');
          el.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGV' +
            'pZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMgMGwtNC41IDE2LjUtNi4wOTctNS40MyA1Ljg1Mi02LjE3NS03Ljg0NCA1LjQyMS01LjQxMS0xLjMxNiA' +
            'xOC05em0tMTEgMTIuNTAxdjUuNDk5bDIuMTkzLTMuMzIzLTIuMTkzLTIuMTc2em0tOC42OTggNi44MjVsLTEuNDM5LS41MDcgNS43MDEtNS4yMTUgMS40MzYuMzk2LTUuNjk4IDUuMzI2em0zLjI' +
            '2MiA0LjI4N2wtMS4zMjMtLjU2NSA0LjQzOS00LjUwMyAxLjMyLjQ1NS00LjQzNiA0LjYxM3ptLTQuMDgzLjM4N2wtMS40ODEtLjUwNyA4LTcuODkgMS40MzcuMzk3LTcuOTU2IDh6Ii8+PC9zdmc+';

          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
              .setHTML(
                '<p>' + marker.properties.message + '</p>'
              ))
            .addTo(this.map);
        });
      });

      this.vkEvents.then(events => {
        events.forEach(vkEvent => {
          if (vkEvent.place) {
            const el = document.createElement('img');
            el.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGV' +
              'pZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMgMGwtNC41IDE2LjUtNi4wOTctNS40MyA1Ljg1Mi02LjE3NS03Ljg0NCA1LjQyMS01LjQxMS0xLjMxNiA' +
              'xOC05em0tMTEgMTIuNTAxdjUuNDk5bDIuMTkzLTMuMzIzLTIuMTkzLTIuMTc2em0tOC42OTggNi44MjVsLTEuNDM5LS41MDcgNS43MDEtNS4yMTUgMS40MzYuMzk2LTUuNjk4IDUuMzI2em0zLjI' +
              '2MiA0LjI4N2wtMS4zMjMtLjU2NSA0LjQzOS00LjUwMyAxLjMyLjQ1NS00LjQzNiA0LjYxM3ptLTQuMDgzLjM4N2wtMS40ODEtLjUwNyA4LTcuODkgMS40MzcuMzk3LTcuOTU2IDh6Ii8+PC9zdmc+';

            new mapboxgl.Marker(el)
              .setLngLat([vkEvent.place.longitude, vkEvent.place.latitude])
              .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
                .setHTML(
                  '<p>' + vkEvent.description + '</p>'
                ))
              .addTo(this.map);
          }
        });
      });

    });

  }


  /// Helpers
  removeMarker(marker) {
    this.mapService.removeMarker(marker);
  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    });
  }
}
