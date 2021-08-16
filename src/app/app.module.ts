import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForDocComponent } from './Components/for-doc/for-doc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { ForInsurersComponent } from './Components/for-insurers/for-insurers.component';
import { ForInsurersSliderComponent } from './Components/for-insurers-slider/for-insurers-slider.component';
import { ForDocSliderComponent } from './Components/for-doc-slider/for-doc-slider.component';
@NgModule({
  declarations: [AppComponent, ForDocComponent, ForInsurersComponent, ForInsurersSliderComponent, ForDocSliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SwiperModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
