import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-details',
  imports: [],
  templateUrl: './address-details.html',
  styleUrl: './address-details.css'
})
export class AddressDetailsComponent {

  constructor(
    private router: Router
  ) {}

  back() {

    this.router.navigate(
      ['/personal-details']
    );

  }

  next() {

    this.router.navigate(
      ['/land-survey-details']
    );

  }

}