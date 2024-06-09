import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css',
})
export class FrontpageComponent {
  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:4000';
  API_KEY = ''; //ask for the API key
  phoneNumberRegex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

  startingAddress: string = '';
  destinationAddress: string = '';
  date: Date;
  phoneNumber: string = '';
  paymentMethod: string = '';
  cardNumber: string = '';
  expirationDate: Date;

  message: string = '';
  estimatedPrice: number = 0;
  reservationSubmitted: boolean = false;

  onSubmit() {
    //check if the form is valid
    const showErrorMessage = (message: string) => {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, 1500);
    };

    if (!this.phoneNumber.match(this.phoneNumberRegex)) {
      showErrorMessage('Invalid phone number');
      return;
    }
    if (this.paymentMethod == 'card') {
      if (isNaN(parseInt(this.cardNumber)) || this.cardNumber.length !== 16) {
        showErrorMessage('Invalid card number');
        return;
      }
      const expirationDate = new Date(this.expirationDate);
      if (expirationDate < new Date()) {
        showErrorMessage('Invalid expiration date');
        return;
      }
    }

    let urlTemplate = ''; //ask for the API key
    //used to get the distance between two locations
    if (this.API_KEY !== '') {
      urlTemplate = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${this.startingAddress}&destinations=${this.destinationAddress}&key=${this.API_KEY}`;
    }

    //default price is 500 if API key is invalid
    this.estimatedPrice = 500.0;
    const rideData = {
      startingAddress: this.startingAddress,
      destinationAddress: this.destinationAddress,
      date: this.date,
      phoneNumber: this.phoneNumber,
      paymentMethod: this.paymentMethod,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      estimatedPrice: this.estimatedPrice,
    };

    (async () => {
      try {
        const res = await lastValueFrom(this.http.get(urlTemplate));
        if (res['rows'][0]['elements'][0]['status'] == 'ZERO_RESULTS') {
          this.message = 'Invalid address';
          setTimeout(() => {
            this.message = '';
          }, 1500);
        }
        const distance = res['rows'][0]['elements'][0]['distance']['value'];
        // 96 is the price per kilometer
        this.estimatedPrice = parseFloat(((distance / 1000) * 96).toFixed(2));
        rideData.estimatedPrice = this.estimatedPrice;
        this.reservationSubmitted = true;

        const createRideResponse = await lastValueFrom(this.http.post(`${this.backendUrl}/rides/createRide`, rideData));
      } catch (err) {
        console.log(err);
        //Error handling
        //If API key is invalid, the estimated price will be 500 and it will still create the ride
        this.reservationSubmitted = true;
        const createRideResponse = await lastValueFrom(this.http.post(`${this.backendUrl}/rides/createRide`, rideData));
      }
    })();
  }
}
