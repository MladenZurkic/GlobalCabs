import { Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AllRidesComponent } from './all-rides/all-rides.component';
import { RideComponent } from './ride/ride.component';

export const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'allRides', component: AllRidesComponent },
  { path: 'ride', component: RideComponent },
];
