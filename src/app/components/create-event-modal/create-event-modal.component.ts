import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MapService} from '../../services/map.service';
import {GeoJson} from '../../map';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent implements OnInit {

  message: string;

  closeSuccessResult: string;
  closeFailureResult: string;

  lat = 37.75;
  lng = -122.41;

  constructor(private modalService: NgbModal, private mapService: MapService) { }

  openModal(content) {
    this.modalService.open(content).result.then(result => {
      this.closeSuccessResult = result;

      const newMarker   = new GeoJson([this.lng, this.lat], { message: this.message });
      this.mapService.createMarker(newMarker);
    }, reason => {
      this.closeFailureResult = reason;
    });
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
