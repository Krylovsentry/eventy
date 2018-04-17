import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.css']
})
export class EventBoxComponent implements OnInit {

  @Input() marker: any;

  constructor() {
  }

  ngOnInit() {
  }

}
