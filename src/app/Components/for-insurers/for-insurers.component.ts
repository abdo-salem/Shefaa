import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-for-insurers',
  templateUrl: './for-insurers.component.html',
  styleUrls: ['./for-insurers.component.scss'],
})
export class ForInsurersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
