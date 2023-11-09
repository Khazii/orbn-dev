import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkModeService } from './core/services/dark-mode/dark-mode.service';

@Component({
  standalone: true,
  selector: 'orbn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
})
export class AppComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
