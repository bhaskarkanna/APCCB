import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  imports: [],
  templateUrl: './personal-details.html',
  styleUrl: './personal-details.css'
})
export class PersonalDetailsComponent {

  constructor(
    private router: Router
  ) {}
  

  back() {

    this.router.navigate(['/user-type']);

  }

  next() {

    this.router.navigate(['/address-details']);

  }

}