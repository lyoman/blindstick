import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'key=AIzaSyC-5CY9mOCeg5Y3IhPqi_Yd0-DZtWrJl-E',
      libraries: ['places']
    }),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
