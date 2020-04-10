import { ContactConfig } from './../../model/contact-config';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact-modal',
  templateUrl: './create-contact-modal.component.html',
  styleUrls: ['./create-contact-modal.component.scss']
})
export class CreateContactModalComponent implements OnInit {
  @Input() user: any;
  contactForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.createContactFormFactory();
    if(this.user) this.setFormValues(this.user);
  }
  createContactFormFactory() {
   this.contactForm = new FormGroup({
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl('', Validators.required),
     email: new FormControl('', [Validators.required, Validators.email]),
     phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(10)])
   })   
  }
  setFormValues(user: ContactConfig) {
    this.contactForm.controls['firstName'].setValue(user.firstName);
    this.contactForm.controls['lastName'].setValue(user.lastName);
    this.contactForm.controls['email'].setValue(user.email);
    this.contactForm.controls['phoneNumber'].setValue(user.phoneNumber);
  }
  submitContactDetails() {
    this.activeModal.close(this.contactForm.controls);
  }

  cancel() {
    this.activeModal.dismiss('not confirmed');
  }
}
