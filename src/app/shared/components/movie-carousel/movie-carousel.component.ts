import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
} from '@angular/core';
import { ImagePipe } from '@shared/pipes/image.pipe';
import { IVideoContent } from '@shared/model/video-content.interface';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [ImagePipe],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MovieCarouselComponent implements OnInit {
  @Input() videoContents: IVideoContent[] = [];
  @Input() Title: any;

  breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  };

  ngOnInit(): void { }
}
