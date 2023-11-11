import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RandomDivComponent } from './core/components/random-div/random-div.component';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';

@Component({
  standalone: true,
  selector: 'orbn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, RandomDivComponent],
})
export class AppComponent {
  routes = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'blog', label: 'Blog' },
  ];

  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
