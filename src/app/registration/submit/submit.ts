import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  imports: [],
  templateUrl: './submit.html',
  styleUrl: './submit.css'
})
export class SubmitComponent {

  constructor(
    private router: Router
  ) {}

  back(): void {

    this.router.navigate([
      '/preview'
    ]);

  }

  submitApplication(): void {

    alert(
      'Application Submitted Successfully!'
    );

  }

}