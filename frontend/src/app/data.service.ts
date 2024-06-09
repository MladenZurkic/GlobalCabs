import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private ride = new BehaviorSubject<any>(null);
  rideObservable$ = this.ride.asObservable();

  setSelectedRide(ride: any) {
    this.ride.next(ride);
  }
}
