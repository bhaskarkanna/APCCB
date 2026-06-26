import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.html',
  styleUrl: './preview.css'
})
export class PreviewComponent {

  constructor(
    private router: Router
  ) {}

  back(): void {

    this.router.navigate([
      '/consent'
    ]);

  }

  next(): void {

  this.router.navigate(
    ['/trader-registration']
  );

 } 

  editPersonal(): void {

    this.router.navigate([
      '/personal-details'
    ]);

  }

  editAddress(): void {

    this.router.navigate([
      '/address-details'
    ]);

  }

  editLand(): void {

    this.router.navigate([
      '/land-survey-details'
    ]);

  }

  editPlantation(): void {

    this.router.navigate([
      '/plantation-details'
    ]);

  }

}