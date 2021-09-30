import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from 'src/app/SERVICES/movie.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: []
})
export class ModificarComponent implements OnInit {
  movie: Movie = {
    mov_id: '',
    mov_title: '',
    mov_year: '',
    mov_time: '',
    mov_lang: '',
    mov_dt_rel: '',
    mov_rel_country: '',
  };

  form: FormGroup;
  msgInputSend:string='Editar pelicula';
  colorButton:string="secondary";
  opacity:string ="";

  constructor(private formbuilder: FormBuilder, private MovieService: MovieService, private router: Router, private activeRoute:ActivatedRoute) {
        this.buildForm();
  }

  ngOnInit(): void {
const id_entry =<string> this.activeRoute.snapshot.params.id;
console.log('id de entrada:' + id_entry)

  

if(id_entry){
  this.MovieService.getMovie(id_entry).subscribe((res:any)=>{
    this.movie=res[0]
    console.log(res)
  },err => console.log(err))
}
  }


    private buildForm(){
    this.form = this.formbuilder.group({

title : ['',Validators.required],
  year : ['',[Validators.required,,Validators.maxLength(4),Validators.pattern(/^[0-9]+/)]],
      time : ['',[Validators.required,Validators.maxLength(7),Validators.pattern(/^[0-9]+/)]],
   lang : ['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]],
  release : [''],
  country : ['',[Validators.required,Validators.maxLength(3),Validators.pattern(/^[a-zA-Z ]*$/)]],
    }) 
}

messageInput(){
     this.msgInputSend="Pelicula editada satisfactoriamente"
    this.colorButton="success"
    this.opacity ="opacity-100"

  setTimeout(() => {
       this.msgInputSend="Editar pelicula"
        this.colorButton="primary"
        this.opacity =""
         this.router.navigate(['/inicio'])
  }, 2500);
}



  updateMovie(){
    this.MovieService.editMovie(this.movie.mov_id, this.movie).subscribe(
      res=>{              
        console.log(res)
      },err=>console.log(err)
    )
     this.messageInput() 
  }

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


