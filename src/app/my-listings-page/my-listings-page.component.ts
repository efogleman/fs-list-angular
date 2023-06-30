import { Component } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent {

  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with listing id ${listingId}`);
  }
}
