import {Component, OnInit} from '@angular/core';
import {VkService} from '../../services/vk.service';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  markers: any;
  vkEvents: any;

  constructor(private mapService: MapService, private vkService: VkService) {
  }

  ngOnInit() {
    this.markers = this.mapService.getMarkers();
    this.vkEvents = this.vkService.getNearEvents();
  }
}
