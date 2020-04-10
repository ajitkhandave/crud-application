import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  defaultLoginCredential = {username: 'admin', password: 'admin'};
  staticAlert: boolean;
  loginForm: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    if(this.loginForm.controls['username'].value == this.defaultLoginCredential.username && 
    this.loginForm.controls['password'].value == this.defaultLoginCredential.password) {
      this.router.navigate(['/contact-list'])
    } else {
      this.staticAlert = true;
    }
  }

  closeAlert() {
    this.staticAlert = false;
  }
}
