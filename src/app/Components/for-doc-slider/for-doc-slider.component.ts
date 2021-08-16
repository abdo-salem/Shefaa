import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-for-doc-slider',
  templateUrl: './for-doc-slider.component.html',
  styleUrls: ['./for-doc-slider.component.scss'],
})
export class ForDocSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
