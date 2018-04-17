import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  @Input() markers: any;
  @Input() vkEvents: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }


}
