import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { addressData, AddressData } from './address-json';
import { flush } from '@angular/core/testing';



@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  styleUrls: ['./main.css'],
  templateUrl: './main.html',
})
export class App {
  addressData: AddressData[];
  name = 'Angular';
  matchedAddresses: AddressData[];
  selectd: AddressData[];

  constructor() {
    this.addressData = addressData;
    this.matchedAddresses = this.matchedAddresses;
  }

  getform(zipcode) {
    this.matchedAddresses = addressData.filter((a) => a.zipcode == zipcode);
  }

  
}

bootstrapApplication(App);
