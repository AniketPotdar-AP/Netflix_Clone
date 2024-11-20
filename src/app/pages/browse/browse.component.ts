import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { BannerComponent } from '@core/components/banner/banner.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { MovieCarouselComponent } from '@shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '@shared/model/video-content.interface';
import { MovieService } from '@shared/services/movie.service';
import { forkJoin, map, Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    CommonModule,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrowseComponent implements OnInit {
  movieService = inject(MovieService);
  profileImg = JSON.parse(sessionStorage.getItem('user')!).picture;
  name = JSON.parse(sessionStorage.getItem('user')!).name;
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
    this.movieService.getUpcomingMovies(),
  ];

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(
          ([
            movies,
            tvShows,
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies,
          ]) => {
            this.bannerDetail$ = this.movieService.getBannerDetail(
              movies.results[0].id
            );
            this.bannerVideo$ = this.movieService.getBannerVideo(
              movies.results[0].id
            );
            return {
              movies,
              tvShows,
              nowPlayingMovies,
              popularMovies,
              topRatedMovies,
              upcomingMovies,
            };
          }
        )
      )
      .subscribe((res: any) => {
        (this.movies = res.movies.results as IVideoContent[]),
          (this.tvShows = res.tvShows.results as IVideoContent[]),
          (this.nowPlayingMovies = res.nowPlayingMovies
            .results as IVideoContent[]),
          (this.popularMovies = res.popularMovies.results as IVideoContent[]),
          (this.topRatedMovies = res.topRatedMovies.results as IVideoContent[]),
          (this.upcomingMovies = res.upcomingMovies.results as IVideoContent[]);
        this.getMovieKey();
      });
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id).subscribe((res) => {});
  }
}
