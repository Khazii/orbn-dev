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

  get isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    if (this.darkMode) {
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
    }
  }
}
