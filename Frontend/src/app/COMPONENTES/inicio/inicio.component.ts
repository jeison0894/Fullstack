import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from 'src/app/SERVICES/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


MovieList: Movie[];

  constructor(private MovieService:MovieService, private router:Router) { }

  
  ngOnInit(): void {
    this.movieList();
  }


movieList(){
  this.MovieService.getMovies().subscribe(res=>{
    console.log(res)
     this.MovieList=<any>res;
  },err => console.log(err))
}


deletedMovie(id:string){
  let deleteAlert = confirm('Confirmas la eliminación de la pelicula?')


  if(deleteAlert){
this.MovieService.deleteMovie(id).subscribe(
  res=>{
    console.log('Movie deleted')
     this.movieList();
  }, err=>console.log(err))
  }

}

updateMovie(id:string){
this.router.navigate(['/edit/'+id])
}
}
