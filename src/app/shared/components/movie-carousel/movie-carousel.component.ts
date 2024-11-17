import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { MovieService } from '@shared/services/movie.service';
import { ImagePipe } from "@shared/pipes/image.pipe";

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [ImagePipe],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieCarouselComponent implements OnInit {

  movieService = inject(MovieService)
  movieList: any

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res) => {
      if (res) {
        this.movieList = res.results
        console.log(res);

      }
    }, (err) => {
      console.log(err);
    })
  }

}
