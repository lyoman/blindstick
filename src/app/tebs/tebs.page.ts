import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tebs',
  templateUrl: './tebs.page.html',
  styleUrls: ['./tebs.page.scss'],
})
export class TebsPage implements OnInit {

  constructor(
    public router: Router,
    private platform: Platform,
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