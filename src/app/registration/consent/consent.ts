import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consent',
  imports: [],
  templateUrl: './consent.html',
  styleUrl: './consent.css',
})
export class ConsentComponent {

  constructor(
    private router: Router
  ) {}

  back(): void {

    this.router.navigate([
      '/carbon-calculator'
    ]);

  }

  next(): void {

    this.router.navigate([
      '/preview'
    ]);

  }

}