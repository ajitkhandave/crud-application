import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CreateContactModalComponent } from './modal/create-contact-modal/create-contact-modal.component';
import { DeleteContactModalComponent } from './modal/delete-contact-modal/delete-contact-modal.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from './app.routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CreateContactModalComponent,
    DeleteContactModalComponent,
    LoginComponent,
    NotFoundComponent
  ],
  entryComponents:[CreateContactModalComponent, DeleteContactModalComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
