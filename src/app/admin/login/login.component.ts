import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public auth: AngularFireAuth,
    private readonly authentication: AuthenticationService,
    private formbuilder: FormBuilder,
    private router: Router,
    private fireAuth: Auth,
  ) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
  onSubmit() {
    this.authentication
      .login(
        this.fireAuth,
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .then(() => {
        // this.toast.success('User logged in successfully');
        this.router.navigate(['/dashboard']);
        this.authentication.isLoggedin = true;
      })
      .catch((error) => {
        // this.toast.error(error.message);
      });
  }
}
