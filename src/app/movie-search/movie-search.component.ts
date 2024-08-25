import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-search', // Deve ser 'app-movie-search'
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  @Output() movieData = new EventEmitter<any>();

  // Logica do componente aqui
}
