import { Routes } from '@angular/router';

import { RegistrationWizardComponent } from './registration/registration-wizard/registration-wizard';

import { UserTypeComponent } from './registration/user-type/user-type';

import { PersonalDetailsComponent } from './registration/personal-details/personal-details';

import { AddressDetailsComponent } from './registration/address-details/address-details';

import { LandSurveyDetailsComponent } from './registration/land-survey-details/land-survey-details';

//import { AadhaarVerificationComponent } from './registration/aadhaar-verification/aadhaar-verification';

import { PlantationDetailsComponent } from './registration/plantation-details/plantation-details';

//import { PlantationQuantityComponent } from './registration/plantation-quantity/plantation-quantity';

import { CarbonCalculatorComponent } from './registration/carbon-calculator/carbon-calculator';

import { ConsentComponent } from './registration/consent/consent';

import { PreviewComponent } from './registration/preview/preview';

import { TraderRegistrationComponent } from './trader-registration/trader-registration';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: RegistrationWizardComponent
  },

  {
    path: 'user-type',
    component: UserTypeComponent
  },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent
  },
  {
    path: 'address-details',
    component: AddressDetailsComponent
  },
  {
    path: 'land-survey-details',
    component: LandSurveyDetailsComponent
  },
  // {
  //   path: 'aadhaar-verification',
  //   component: AadhaarVerificationComponent
  // },
  {
    path: 'plantation-details',
    component: PlantationDetailsComponent
  },
  //{
    //path: 'plantation-quantity',
    //component: PlantationQuantityComponent
  //},
  {
    path: 'carbon-calculator',
    component: CarbonCalculatorComponent
  },
  {
    path: 'consent',
    component: ConsentComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  },
  {
    path: 'trader-registration',
    component: TraderRegistrationComponent
  } 
];