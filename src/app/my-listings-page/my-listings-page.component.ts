import { Component } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent {

  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    this.listingsService.getListingsForUser()
      .subscribe(listings => {
        this.listings = listings;
        this.isLoading = false;
      });
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(
          listing => listing.id != listingId
        );
        alert(`Listing has been deleted!`);
      });
  }
}
