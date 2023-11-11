import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomDivComponent } from '../../components/random-div/random-div.component';

interface DivData {
  imageUrl: string;
  text: string;
  href?: string;
  route?: string;
  top: number;
  left: number;
  width: number;
  height: number;
  hovered?: boolean;
}

interface ImagePaths {
  imageUrl: string;
  href?: string;
  route?: string;
}

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, DragDropModule, RandomDivComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  divs: DivData[] = [];
  imagePaths: ImagePaths[] = [
    {
      imageUrl: '/assets/images/figs_also_idiot.png',
      href: 'https://www.instagram.com/explore/search/keyword/?q=working%20cocker%20spaniel&hl=en-gb',
    },
    {
      imageUrl: '/assets/images/isla_logo.png',
      href: 'https://isla.health/',
    },
    {
      imageUrl: '/assets/images/me_an_idiot.png',
      route: 'about',
    },
    {
      imageUrl: '/assets/images/cringe_harold.png',
      route: 'blog',
    },
    {
      imageUrl: '/assets/images/remote_working.png',
      route: 'blog',
    },
    {
      imageUrl: '/assets/images/someone_using_instagram.png',
      href: 'https://www.instagram.com/olliebrennan_/',
    },
    {
      imageUrl: '/assets/images/someone_using_twitter.png',
      href: 'https://twitter.com/olliebrennan_',
    },
  ];

  isDragging = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadImagesAndGenerateDivs();
    window.addEventListener('resize', () => this.loadImagesAndGenerateDivs());
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () =>
      this.loadImagesAndGenerateDivs()
    );
  }

  loadImagesAndGenerateDivs() {
    this.divs = []; // Reset the array

    this.imagePaths.forEach((imagePaths) => {
      const img = new Image();
      img.onload = () => {
        // Image is loaded, get the width and height
        let width = img.naturalWidth;
        let height = img.naturalHeight;

        const shrinkFactor = 0.35;
        width = width * shrinkFactor;
        height = height * shrinkFactor;

        this.divs.push({
          imageUrl: imagePaths.imageUrl,
          text: `${imagePaths.imageUrl.split('/').pop()}`,
          href: imagePaths.href,
          route: imagePaths.route,
          width,
          height,
          ...this.calculateRandomPosition(width, height),
        });
      };

      img.onerror = () => {
        console.error(`Failed to load image at ${imagePaths.imageUrl}`);
      };
      img.src = imagePaths.imageUrl;
    });
  }

  shuffleDivs() {
    this.divs.forEach((div) => {
      const { width, height } = div;
      Object.assign(div, this.calculateRandomPosition(width, height));
    });
  }

  calculateRandomPosition(width: number, height: number) {
    const rangeOffset = Math.min(window.innerWidth, window.innerHeight) / 2;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (Math.random() - 0.5) * rangeOffset;
    const offsetY = (Math.random() - 0.5) * rangeOffset;

    const x = Math.max(
      0,
      Math.min(centerX + offsetX - width / 2, window.innerWidth - width)
    );
    const y = Math.max(
      0,
      Math.min(centerY + offsetY - height / 2, window.innerHeight - height)
    );

    return { left: x, top: y };
  }

  onDragStart(event: any, div: any) {
    this.isDragging = true;
  }

  onDragEnd(event: any, div: any) {
    setTimeout(() => (this.isDragging = false), 100);
  }

  imageClick(div: DivData) {
    if (!this.isDragging) {
      if (div.href) {
        window.open(div.href, '_blank');
      } else if (div.route) {
        this.router.navigate([div.route]);
      }
    }
  }
}
