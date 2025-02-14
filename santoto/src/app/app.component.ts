import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'santoto';
  showCarousel: boolean = true;
  currentIndex: number = 0;
  menuOpen: boolean = false; // Estado del menú hamburguesa

  images: string[] = [
    '/assets/carrusel1.jpeg',
    '/assets/carrusel2.jpeg',
    '/assets/carrusel3.jpg'
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCarousel = event.url === '/';
      }
    });

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }

  redirigir(ruta: string) {
    this.menuOpen = false; // Cierra el menú al hacer clic en un enlace
    this.router.navigate([ruta]);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alterna el estado del menú
  }
}
