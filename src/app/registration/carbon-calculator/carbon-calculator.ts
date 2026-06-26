import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbon-calculator',
  imports: [],
  templateUrl: './carbon-calculator.html',
  styleUrl: './carbon-calculator.css'
})
export class CarbonCalculatorComponent {

  constructor(
    private router: Router
  ) {}

  back(): void {

    this.router.navigate(
      ['/plantation-details']
    );

  }

  next(): void {

    this.router.navigate(['/consent']);

  }

}