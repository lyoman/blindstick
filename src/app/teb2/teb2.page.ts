import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teb2',
  templateUrl: './teb2.page.html',
  styleUrls: ['./teb2.page.scss'],
})
export class Teb2Page implements OnInit {

  constructor(
    public router: Router,
  ) {

  }

  ngOnInit() {
  }

  backToWelcome() {
    this.router.navigateByUrl('login');

  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
  }


}
