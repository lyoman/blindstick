import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coords: any;
  constructor() {
    this.locate();
   }
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates.coords;
    console.log("coords", this.coords);
  }

  // Geolocation.watchPosition().subscribe((position) => {
  //   this.x = position.coords.longitude;
  //   this.y = position.coords.latitude;
  
  //   let latLng = new google.maps.LatLng(this.x, this.y);
  
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
  //       new google.maps.Size(22, 22),
  //       new google.maps.Point(0, 18),
  //       new google.maps.Point(11, 11)),
  //     position: latLng
  //   });
  
  //   let content = "<h4>You are here</h4>";
  //   this.addInfoWindow(marker, content);
  
  // }, (err) => {
  //   console.log(err);
  // });
  // }

}
