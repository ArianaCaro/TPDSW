import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/interfaces/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit {
  listMovies: Movie[] = []
  loading: boolean = false;

  constructor(private _movieService: MovieService, private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    this.getListMovies();
  }

  getListMovies(){
    this.loading = true;
    this._movieService.getListMovies().subscribe((data: Movie[]) => {
    this.listMovies = data;
    this.loading = false;
    })
  }

  deleteMovie(id: number){
    this.loading = true;
    this._movieService.deleteMovie(id).subscribe(data => { //usamos subscribe porque tiene que devolver un observable
      this.getListMovies();
      this.toastr.warning('La pelicula fue eiminada correctamente', 'Pelicula eliminada');
    })
  }
}

