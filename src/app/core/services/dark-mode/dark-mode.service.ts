// dark-mode.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkMode: boolean;

  constructor() {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.darkMode) {
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
    }
  }
}
