import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.css']
})
export class CreateEventModalComponent implements OnInit {

  closeSuccessResult: string;
  closeFailureResult: string;

  constructor(private modalService: NgbModal) { }

  openModal(content) {
    this.modalService.open(content).result.then(result => {
      this.closeSuccessResult = result;
    }, reason => {
      this.closeFailureResult = reason;
    });
  }

  ngOnInit() {
  }

}
