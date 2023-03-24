import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css'],
})
export class MovieCoverComponent {
  @Input() wlozMiFilm: Movie;


  ngOnChanges(): void {
    console.log(this.wlozMiFilm)
  }
}
