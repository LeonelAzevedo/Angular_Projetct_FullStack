import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movieName: string = '';
  movieData: any = null;
  isSearchButtonEnabled: boolean = false;
  apiKey: string = '7eb8bcc2'; // Substitua pelo seu API Key

  constructor(private http: HttpClient, private router: Router) {}

  onMovieNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.movieName = input.value;
    this.isSearchButtonEnabled = this.movieName.trim() !== '';
  }

  onSearch() {
    if (!this.movieName.trim()) {
      return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(this.movieName)}&apikey=${this.apiKey}`;

    this.http.get(url).subscribe({
      next: (response: any) => {
        if (response.Response === 'True') {
          this.movieData = response;
        } else {
          this.movieData = null;
        }
      },
      error: (error) => {
        console.error('Error fetching movie data:', error);
        this.movieData = null;
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']); // Redirecionar para a página de registro
  }
  goToLogin() {
    this.router.navigate(['/login']); // Redireciona para a página inicial
  }
}

