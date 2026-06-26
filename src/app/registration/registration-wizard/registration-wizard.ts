import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-wizard',
  imports: [],
  templateUrl: './registration-wizard.html',
  styleUrl: './registration-wizard.css'
})
export class RegistrationWizardComponent {

  constructor(
    private router: Router
  ) {}

  startRegistration() {

    this.router.navigate([
      '/user-type'
    ]);

  }

  skipRegistration() {

    this.router.navigate([
      '/user-type'
    ]);

  }

}