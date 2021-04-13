import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { id: '', username: '', password: ''};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  guest() {
    this.router.navigateByUrl('/guardian');
  }

  login() {
    this.router.navigateByUrl('/home');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
