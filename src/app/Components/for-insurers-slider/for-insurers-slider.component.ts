import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-for-insurers-slider',
  templateUrl: './for-insurers-slider.component.html',
  styleUrls: ['./for-insurers-slider.component.scss'],
})
export class ForInsurersSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
