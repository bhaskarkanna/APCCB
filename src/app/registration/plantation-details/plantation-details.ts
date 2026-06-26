import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantation-details',
  imports: [],
  templateUrl: './plantation-details.html',
  styleUrl: './plantation-details.css',
})
export class PlantationDetailsComponent {

  constructor(
    private router: Router
  ) {}

  // ================= LAND TYPE =================

  selectedLandType: string = '';

  selectLandType(type: string): void {

    this.selectedLandType = type;

    console.log('Selected Land Type:', type);

  }

  // ================= PLANTATION TYPE =================

  selectedPlantationType: string = '';

  selectPlantationType(type: string): void {

    this.selectedPlantationType = type;

    console.log('Selected Plantation Type:', type);

  }

  // ================= NAVIGATION =================

  back(): void {

    this.router.navigate(
      ['/land-survey-details']
    );

  }

  next(): void {

    if (!this.selectedLandType) {

      alert('Please select a land type');

      return;

    }

    if (!this.selectedPlantationType) {

      alert('Please select a plantation type');

      return;

    }

    this.router.navigate(
      ['/carbon-calculator']
    );

  }

}