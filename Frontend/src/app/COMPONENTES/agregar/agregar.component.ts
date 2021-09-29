import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from 'src/app/SERVICES/movie.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  msgInputSend:string='Agregar pelicula';
  colorButton:string="secondary";
  opacity:string ="";
  

  constructor(private MovieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    
  }


messageInput(){
     this.msgInputSend="Pelicula agregada satisfactoriamente"
    this.colorButton="success"
    this.opacity ="opacity-100"

  setTimeout(() => {
       this.msgInputSend="Agregar pelicula"
        this.colorButton="primary"
        this.opacity =""
  }, 3000);
}


  addMovie(form:NgForm) { 

    this.MovieService.addMovie(this.movie).subscribe();  
    console.log(this.movie)    
    form.reset()
   this.messageInput() 
  }
}
