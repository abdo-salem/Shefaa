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
  selector: 'app-for-doc',
  templateUrl: './for-doc.component.html',
  styleUrls: ['./for-doc.component.scss'],
})
export class ForDocComponent implements OnInit {
  ngOnInit(): void {}
}
