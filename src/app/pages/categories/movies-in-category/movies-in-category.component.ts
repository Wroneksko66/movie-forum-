import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HttpService} from '../../../services/http.service';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  wszystkiefilmy: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.wszystkiefilmy = this.route.paramMap.pipe(
      switchMap((params) =>
        this.http.getMoviesFromCategory(params.get('test')))
    );
  }
}
