import { Component, OnInit } from '@angular/core';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateContactModalComponent } from '../../modal/create-contact-modal/create-contact-modal.component';
import { ContactConfig } from '../../model/contact-config';
import { DeleteContactModalComponent } from 'src/app/modal/delete-contact-modal/delete-contact-modal.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constactList= [
    {id: 1, firstName: "Amit", lastName: "Kakde", email: "amitkakde@gmail.com", phoneNumber: '123456789'},
    {id: 2, firstName: "Sumeet", lastName: "Jadhav", email: "sumeetjadhav@gmail.com", phoneNumber: '123456789'},
    {id: 3, firstName: "Prashant", lastName: "Patil", email: "p.patil@gmail.com", phoneNumber: '123456789'}
  ];
  staticAlert: boolean;
  alertMsg: string;
  alertType: string;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  addContact() {
    const modalRef = this.openModal(CreateContactModalComponent);
    // once modal sends response
    modalRef.result.then((contact) => {
      // navigate to create product page with selected product type
      let maxCounter = Math.max.apply(Math, this.constactList.map((e)=>{return e.id;}));
      contact.id = maxCounter + 1;
      this.addContactTolist(contact);
      this.showNotification('success', 'Contact added successfully');
    }).catch((err)=> {})
  }

  editContact(user: any) {
    const modalRef = this.openModal(CreateContactModalComponent);
    modalRef.componentInstance.user = user;
    // once modal sends response
    modalRef.result.then((contact) => {
      // navigate to create product page with selected product type
      
      this.modifyContactList(contact, user.id);
      this.showNotification('success', 'Contact modified successfully');
    }).catch((err)=> {})
  }

  addContactTolist(contact: any) {
    let user = new ContactConfig;
    user.id= contact.id;
    user.firstName= contact.firstName.value;
    user.lastName= contact.lastName.value;
    user.email= contact.email.value;
    user.phoneNumber= contact.phoneNumber.value;
    this.constactList.push(user);
  }

  modifyContactList(user, id) {
    this.constactList.forEach((e)=>{
      if(e.id == id) {
        e.firstName = user.firstName.value;
        e.lastName = user.lastName.value;
        e.email = user.email.value;
        e.phoneNumber = user.phoneNumber.value;
      }
    })
  }

  deleteContactFormList(user){
    const modalRef = this.openModal(DeleteContactModalComponent);
    modalRef.componentInstance.user = user;
    // once modal sends response
    modalRef.result.then(() => {
      // navigate to create product page with selected product type
      for(let i=0; i<this.constactList.length; i++) {
        if(this.constactList[i].id == user.id) {
          this.constactList.splice(i,1);
        }
      }
      this.showNotification('success', 'Contact deleted successfully');
    }).catch((err)=> {})
  }

  showNotification(type: string, msg: string){
    this.alertType = type;
    this.alertMsg = msg;
    this.staticAlert = true;
  }

  closeAlert() {
    this.staticAlert = false;
  }

  private openModal(component) {
    const ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      centered: true
    };
    const modalRef = this.modalService.open(component, ngbModalOptions);
    return modalRef;
  }
}
