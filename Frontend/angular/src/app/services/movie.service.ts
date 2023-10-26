import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/movies/'
  }
  
  getListMovies(): Observable <Movie[]> {
    //this.http.get(this.myAppUrl + this.myApiUrl);
    return this.http.get<Movie[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteMovie(id: number): Observable <void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveMovie(movie: Movie): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, movie)
  }

  getMovie(id: number): Observable <Movie>{
    return this.http.get <Movie>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateMovie(id: number, movie: Movie): Observable <void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, movie);
  }
}
