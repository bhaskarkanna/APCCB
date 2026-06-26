import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  imports: [],
  templateUrl: './user-type.html',
  styleUrl: './user-type.css'
})
export class UserTypeComponent {

  selectedUserType: string = '';

  constructor(
    private router: Router
  ) {}

  selectUserType(type: string): void {

    this.selectedUserType = type;

    console.log('Selected User Type:', type);

  }

  back(): void {

    this.router.navigate(['/registration']);

  }

  next(): void {

    if (!this.selectedUserType) {

      alert('Please select a user type');

      return;

    }

    this.router.navigate(['/personal-details']);

  }

}