import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-random-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-div.component.html',
  styleUrl: './random-div.component.scss',
})
export class RandomDivComponent {}
