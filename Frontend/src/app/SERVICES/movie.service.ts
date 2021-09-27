import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = '/api'
  constructor(private http: HttpClient) { }


//get movies
getMovies(){
  return this.http.get(this.url)
}


//get un movie
getMovie(id:string){
  return this.http.get(this.url+'/'+id)
}

//Agregar movie
addMovie(movie:Movie){
return this.http.post(this.url, movie)
}

//Eliminar
deleteMovie(id:string){
return this.http.delete(this.url+'/'+id)
}

//udpate
editMovie(id:string,movie:Movie){
return this.http.put(this.url+'/'+id,movie)
}
}

export interface Movie{
  mov_id?:any;
  mov_title?:string;
  mov_year?:string;
  mov_time?:string;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string;
}