import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from 'src/app/SERVICES/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  movie: Movie = {
    mov_id: 0,
    mov_title: '',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: '',
    mov_rel_country: '',
  };
  constructor(private MovieService: MovieService, private router: Router) {}

  ngOnInit(): void {}

  addMovie() {
    //delete this.movie.mov_id; 

    this.MovieService.addMovie(this.movie).subscribe();
    alert('Pelicula agregada satisfactoriamente')
    /* this.router.navigate(['/inicio']);  */
  }
}
