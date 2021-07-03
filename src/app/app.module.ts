import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';

import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';
import { FindBrandComponent } from './pages/brand/find-brand/find-brand.component';

import { ListStatusComponent } from './pages/status/list-status/list-status.component';
import { CreateStatusComponent } from './pages/status/create-status/create-status.component';
import { UpdateStatusComponent } from './pages/status/update-status/update-status.component';
import { FindStatusComponent } from './pages/status/find-status/find-status.component';

import { ListVehicleTypeComponent } from './pages/vehicle-type/list-vehicle-type/list-vehicle-type.component';
import { CreateVehicleTypeComponent } from './pages/vehicle-type/create-vehicle-type/create-vehicle-type.component';
import { UpdateVehicleTypeComponent } from './pages/vehicle-type/update-vehicle-type/update-vehicle-type.component';
import { FindVehicleTypeComponent } from './pages/vehicle-type/find-vehicle-type/find-vehicle-type.component';

import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './pages/customer/update-customer/update-customer.component';
import { FindCustomerComponent } from './pages/customer/find-customer/find-customer.component';

import { CreateVehicleComponent } from './pages/vehicle/create-vehicle/create-vehicle.component';
import { FindVehicleComponent } from './pages/vehicle/find-vehicle/find-vehicle.component';
import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { UpdateVehicleComponent } from './pages/vehicle/update-vehicle/update-vehicle.component';

import { CreateReservationComponent } from './pages/reservation/create-reservation/create-reservation.component';
import { FindReservationComponent } from './pages/reservation/find-reservation/find-reservation.component';
import { ListReservationComponent } from './pages/reservation/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './pages/reservation/update-reservation/update-reservation.component';

import { CreateOfferComponent } from './pages/offer/create-offer/create-offer.component';
import { FindOfferComponent } from './pages/offer/find-offer/find-offer.component';
import { ListOfferComponent } from './pages/offer/list-offer/list-offer.component';
import { UpdateOfferComponent } from './pages/offer/update-offer/update-offer.component';

import { CreateAddressComponent } from './pages/address/create-address/create-address.component';
import { FindAddressComponent } from './pages/address/find-address/find-address.component';
import { ListAddressComponent } from './pages/address/list-address/list-address.component';
import { UpdateAddressComponent } from './pages/address/update-address/update-address.component';

import { CreateCommentComponent } from './pages/comment/create-comment/create-comment.component';
import { FindCommentComponent } from './pages/comment/find-comment/find-comment.component';
import { ListCommentComponent } from './pages/comment/list-comment/list-comment.component';
import { UpdateCommentComponent } from './pages/comment/update-comment/update-comment.component';

import { CreateUserAddressComponent } from './pages/user-address/create-user-address/create-user-address.component';
import { FindUserAddressComponent } from './pages/user-address/find-user-address/find-user-address.component';
import { ListUserAddressComponent } from './pages/user-address/list-user-address/list-user-address.component';
import { UpdateUserAddressComponent } from './pages/user-address/update-user-address/update-user-address.component';

import { CreateCreditCardComponent } from './pages/credit-card/create-credit-card/create-credit-card.component';
import { FindCreditCardComponent } from './pages/credit-card/find-credit-card/find-credit-card.component';
import { ListCreditCardComponent } from './pages/credit-card/list-credit-card/list-credit-card.component';
import { UpdateCreditCardComponent } from './pages/credit-card/update-credit-card/update-credit-card.component';

import { CreateRentalActivitiesComponent } from './pages/rental-activities/create-rental-activities/create-rental-activities.component';
import { FindRentalActivitiesComponent } from './pages/rental-activities/find-rental-activities/find-rental-activities.component';
import { ListRentalActivitiesComponent } from './pages/rental-activities/list-rental-activities/list-rental-activities.component';
import { UpdateRentalActivitiesComponent } from './pages/rental-activities/update-rental-activities/update-rental-activities.component';

import { CreateSubscriptionComponent } from './pages/subscription/create-subscription/create-subscription.component';
import { FindSubscriptionComponent } from './pages/subscription/find-subscription/find-subscription.component';
import { ListSubscriptionComponent } from './pages/subscription/list-subscription/list-subscription.component';
import { UpdateSubscriptionComponent } from './pages/subscription/update-subscription/update-subscription.component';

@NgModule({
  declarations: [
    AppComponent,

    ListBrandComponent,
    CreateBrandComponent,
    UpdateBrandComponent,
    FindBrandComponent,

    ListStatusComponent,
    CreateStatusComponent,
    UpdateStatusComponent,
    FindStatusComponent,

    ListVehicleTypeComponent,
    CreateVehicleTypeComponent,
    UpdateVehicleTypeComponent,
    FindVehicleTypeComponent,

    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    FindCustomerComponent,

    CreateVehicleComponent,
    FindVehicleComponent,
    ListVehicleComponent,
    UpdateVehicleComponent,

    CreateReservationComponent,
    FindReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,

    CreateOfferComponent,
    FindOfferComponent,
    ListOfferComponent,
    UpdateOfferComponent,

    CreateAddressComponent,
    FindAddressComponent,
    ListAddressComponent,
    UpdateAddressComponent,

    CreateCommentComponent,
    FindCommentComponent,
    ListCommentComponent,
    UpdateCommentComponent,

    CreateUserAddressComponent,
    FindUserAddressComponent,
    ListUserAddressComponent,
    UpdateUserAddressComponent,

    CreateCreditCardComponent,
    FindCreditCardComponent,
    ListCreditCardComponent,
    UpdateCreditCardComponent,

    CreateRentalActivitiesComponent,
    FindRentalActivitiesComponent,
    ListRentalActivitiesComponent,
    UpdateRentalActivitiesComponent,
    
    CreateSubscriptionComponent,
    FindSubscriptionComponent,
    ListSubscriptionComponent,
    UpdateSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
