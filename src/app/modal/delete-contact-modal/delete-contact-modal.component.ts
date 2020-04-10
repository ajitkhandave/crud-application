import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-contact-modal',
  templateUrl: './delete-contact-modal.component.html',
  styleUrls: ['./delete-contact-modal.component.scss']
})
export class DeleteContactModalComponent implements OnInit {

  @Input() user: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  deleteContact() {
    this.activeModal.close("Confirm");
  }

  cancel() {
    this.activeModal.dismiss('not confirmed');
  }
}
