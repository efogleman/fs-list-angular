import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    ListingDetailPageComponent,
    ListingsPageComponent,
    MyListingsPageComponent,
    NavBarComponent,
    NewListingPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
