import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teb3',
  templateUrl: './teb3.page.html',
  styleUrls: ['./teb3.page.scss']
})
export class Teb3Page implements OnInit {
  token: any;
  users: any;

  username: any;

  constructor(
    private plt: Platform, 
    private router: Router
    ) {

  }

  ngOnInit() {

  }

  bank() {
    this.router.navigateByUrl('bank');
  }
}
