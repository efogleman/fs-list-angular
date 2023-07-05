import { Component } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {

  listings: Listing[] = [];
  isLoading: boolean = true;

  constructor(
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    this.listingsService.getListings()
      .subscribe(listings => {
        this.listings = listings;
        this.isLoading = false;
      });
  }

}
