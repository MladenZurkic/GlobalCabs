import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ride',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './ride.component.html',
  styleUrl: './ride.component.css',
})
export class RideComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ride: any;

  ngOnInit(): void {
    this.dataService.rideObservable$.subscribe((ride) => {
      if (ride) {
        this.ride = ride;
      }
    });
  }

  getDisplayCardNumber(cardNumber: string): string {
    return cardNumber.slice(-4);
  }
}
