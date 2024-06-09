import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-rides',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './all-rides.component.html',
  styleUrl: './all-rides.component.css',
})
export class AllRidesComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {}

  rides: any[];

  ngOnInit(): void {
    firstValueFrom(this.http.get('http://localhost:4000/rides/getRide'))
      .then((data: any) => {
        this.rides = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  displayRideDetails(ride: any) {
    /*
        firstValueFrom(this.http.get(`http://localhost:4000/rides/getRide/${ride._id}`))
      .then((data: any) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }*/
    this.dataService.setSelectedRide(ride);
    this.router.navigate(['/ride']);
  }
}
