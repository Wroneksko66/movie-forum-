import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movies-in-years',
  templateUrl: './movies-in-years.component.html',
  styleUrls: ['./movies-in-years.component.css']
})
export class MoviesInYearsComponent implements OnInit {
  yearsMovie: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.yearsMovie = this.route.paramMap.pipe(
      switchMap((params) =>
        this.http.getMoviesFromYear((params.get('yearsxd'))))
    )
  }

}
