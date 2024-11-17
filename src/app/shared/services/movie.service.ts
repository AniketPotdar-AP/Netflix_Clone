import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const option = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2NmZWQyMjNhYWIwMzY3ZTVkMmY1YjExYWQ5ZTI0MiIsIm5iZiI6MTczMTg1ODAwMi43MzA1MDI0LCJzdWIiOiI2NzNhMGQxNDIwOWQ0M2ZiZmIzNDg1MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jMO9fuhBnkgbHSEO9lxezD0mmICfyvxTcYxS72-JDfY'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient)

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', option)
  }

}
