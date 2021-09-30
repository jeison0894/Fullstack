import { Component, OnInit } from '@angular/core';
import { Movie,MovieService } from 'src/app/SERVICES/movie.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {debounceTime } from 'rxjs/operators';
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

   form: FormGroup;

  constructor(private formbuilder: FormBuilder, private movieService: MovieService) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(){
    this.form = this.formbuilder.group({

title : ['',Validators.required],
  year : ['',[Validators.required,,Validators.maxLength(4),Validators.pattern(/^[0-9]+/)]],
      time : ['',[Validators.required,Validators.maxLength(7),Validators.pattern(/^[0-9]+/)]],
   lang : ['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]],
  release : [''],
  country : ['',[Validators.required,Validators.maxLength(3),Validators.pattern(/^[a-zA-Z ]*$/)]],
    })    

/* this.form.valueChanges
.pipe(debounceTime(500))
.subscribe(value =>{
  console.log(value)
}) */
}

messageInput(){
     this.msgInputSend="Pelicula agregada satisfactoriamente"
    this.colorButton="success"
    this.opacity ="opacity-100"

  setTimeout(() => {
       this.msgInputSend="Agregar pelicula"
        this.colorButton="primary"
        this.opacity =""
  }, 4000);
}


  addMovie(event:Event) { 
    event.preventDefault()
if(this.form.valid){

  this.movieService.addMovie(this.movie).subscribe(); 
      this.messageInput() 
      this.form.reset()
      console.log(this.movie) 
}}


get titleField(){
  return this.form.get('title')
}

get yearField(){
  return this.form.get('year')
}

get timeField(){
  return this.form.get('time')
}

get languageField(){
  return this.form.get('lang')
}

get countryField(){
  return this.form.get('country')
}
}
