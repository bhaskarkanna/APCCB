import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trader-registration',
  imports: [],
  templateUrl: './trader-registration.html',
  styleUrl: './trader-registration.css',
})
export class TraderRegistrationComponent {

  constructor(
    private router: Router
  ) {}

  // ================= TRADER TYPE =================

  selectedTraderType: string = '';

  selectTraderType(type: string): void {

    this.selectedTraderType = type;

    console.log('Selected Trader Type:', type);

  }

  // ================= TRADING PREFERENCE =================

  selectedTradingPreference: string = '';

  selectTradingPreference(type: string): void {

    this.selectedTradingPreference = type;

    console.log('Selected Trading Preference:', type);

  }

  // ================= NAVIGATION =================

  back(): void {

    this.router.navigate([
      '/consent'
    ]);

  }

  next(): void {

    if (!this.selectedTraderType) {

      alert('Please select a trader type');

      return;

    }

    if (!this.selectedTradingPreference) {

      alert('Please select a trading preference');

      return;

    }

    // Next page (we will create later)
    // this.router.navigate(['/bank-details']);

    alert('Trader Registration Step Completed Successfully');

  }

}