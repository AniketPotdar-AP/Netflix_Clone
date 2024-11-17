
import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from '@core/components/banner/banner.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { MovieCarouselComponent } from '@shared/components/movie-carousel/movie-carousel.component';
import { MovieService } from '@shared/services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent implements OnInit {

  movieService = inject(MovieService)
  profileImg = JSON.parse(sessionStorage.getItem('user')!).picture

  ngOnInit(): void {
  }

}
