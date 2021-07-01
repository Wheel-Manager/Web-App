import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { FindBrandComponent } from './pages/brand/find-brand/find-brand.component';
import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';

import { CreateVehicleTypeComponent } from './pages/vehicle-type/create-vehicle-type/create-vehicle-type.component';
import { FindVehicleTypeComponent } from './pages/vehicle-type/find-vehicle-type/find-vehicle-type.component';
import { ListVehicleTypeComponent } from './pages/vehicle-type/list-vehicle-type/list-vehicle-type.component';
import { UpdateVehicleTypeComponent } from './pages/vehicle-type/update-vehicle-type/update-vehicle-type.component';

import { CreateStatusComponent } from './pages/status/create-status/create-status.component';
import { FindStatusComponent } from './pages/status/find-status/find-status.component';
import { ListStatusComponent } from './pages/status/list-status/list-status.component';
import { UpdateStatusComponent } from './pages/status/update-status/update-status.component';

import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { FindCustomerComponent } from './pages/customer/find-customer/find-customer.component';
import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './pages/customer/update-customer/update-customer.component';

import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { CreateVehicleComponent } from './pages/vehicle/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './pages/vehicle/update-vehicle/update-vehicle.component';
import { FindVehicleComponent } from './pages/vehicle/find-vehicle/find-vehicle.component';

import { ListReservationComponent } from './pages/reservation/list-reservation/list-reservation.component';
import { CreateReservationComponent } from './pages/reservation/create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './pages/reservation/update-reservation/update-reservation.component';
import { FindReservationComponent } from './pages/reservation/find-reservation/find-reservation.component';

import { ListOfferComponent } from './pages/offer/list-offer/list-offer.component';
import { CreateOfferComponent } from './pages/offer/create-offer/create-offer.component';
import { UpdateOfferComponent } from './pages/offer/update-offer/update-offer.component';
import { FindOfferComponent } from './pages/offer/find-offer/find-offer.component';

import { ListAddressComponent } from './pages/address/list-address/list-address.component';
import { CreateAddressComponent } from './pages/address/create-address/create-address.component';
import { UpdateAddressComponent } from './pages/address/update-address/update-address.component';
import { FindAddressComponent } from './pages/address/find-address/find-address.component';

import { ListCommentComponent } from './pages/comment/list-comment/list-comment.component';
import { CreateCommentComponent } from './pages/comment/create-comment/create-comment.component';
import { UpdateCommentComponent } from './pages/comment/update-comment/update-comment.component';
import { FindCommentComponent } from './pages/comment/find-comment/find-comment.component';

import { ListUserAddressComponent } from './pages/user-address/list-user-address/list-user-address.component';
import { CreateUserAddressComponent } from './pages/user-address/create-user-address/create-user-address.component';
import { UpdateUserAddressComponent } from './pages/user-address/update-user-address/update-user-address.component';
import { FindUserAddressComponent } from './pages/user-address/find-user-address/find-user-address.component';

import { ListCreditCardComponent } from './pages/credit-card/list-credit-card/list-credit-card.component';
import { CreateCreditCardComponent } from './pages/credit-card/create-credit-card/create-credit-card.component';
import { UpdateCreditCardComponent } from './pages/credit-card/update-credit-card/update-credit-card.component';
import { FindCreditCardComponent } from './pages/credit-card/find-credit-card/find-credit-card.component';

import { ListRentalActivitiesComponent } from './pages/rental-activities/list-rental-activities/list-rental-activities.component';
import { CreateRentalActivitiesComponent } from './pages/rental-activities/create-rental-activities/create-rental-activities.component';
import { UpdateRentalActivitiesComponent } from './pages/rental-activities/update-rental-activities/update-rental-activities.component';
import { FindRentalActivitiesComponent } from './pages/rental-activities/find-rental-activities/find-rental-activities.component';

import { ListSubscriptionComponent } from './pages/subscription/list-subscription/list-subscription.component';
import { CreateSubscriptionComponent } from './pages/subscription/create-subscription/create-subscription.component';
import { UpdateSubscriptionComponent } from './pages/subscription/update-subscription/update-subscription.component';
import { FindSubscriptionComponent } from './pages/subscription/find-subscription/find-subscription.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },

  { path: 'ListBrand', component: ListBrandComponent },
  { path: 'NewBrand', component: CreateBrandComponent },
  { path: 'UpdateBrand/:id', component: UpdateBrandComponent },
  { path: 'SearchBrand', component: FindBrandComponent },

  { path: 'ListVehicleType', component: ListVehicleTypeComponent },
  { path: 'NewVehicleType', component: CreateVehicleTypeComponent },
  { path: 'UpdateVehicleType/:id', component: UpdateVehicleTypeComponent },
  { path: 'SearchVehicleType', component: FindVehicleTypeComponent },

  { path: 'ListStatus', component: ListStatusComponent },
  { path: 'NewStatus', component: CreateStatusComponent },
  { path: 'UpdateStatus/:id', component: UpdateStatusComponent },
  { path: 'SearchStatus', component: FindStatusComponent },

  { path: 'ListCustomer', component: ListCustomerComponent },
  { path: 'NewCustomer', component: CreateCustomerComponent },
  { path: 'UpdateCustomer/:id', component: UpdateCustomerComponent },
  { path: 'SearchCustomer', component: FindCustomerComponent },

  { path: 'ListVehicle', component: ListVehicleComponent },
  { path: 'NewVehicle', component: CreateVehicleComponent },
  { path: 'UpdateVehicle/:id', component: UpdateVehicleComponent },
  { path: 'SearchVehicle', component: FindVehicleComponent },

  { path: 'ListReservation', component: ListReservationComponent },
  { path: 'NewReservation', component: CreateReservationComponent },
  { path: 'UpdateReservation/:id', component: UpdateReservationComponent },
  { path: 'SearchReservation', component: FindReservationComponent },

  { path: 'ListOffer', component: ListOfferComponent },
  { path: 'NewOffer', component: CreateOfferComponent },
  { path: 'UpdateOffer/:id', component: UpdateOfferComponent },
  { path: 'SearchOffer', component: FindOfferComponent },

  { path: 'ListAddress', component: ListAddressComponent },
  { path: 'NewAddress', component: CreateAddressComponent },
  { path: 'UpdateAddress/:id', component: UpdateAddressComponent },
  { path: 'SearchAddress', component: FindAddressComponent },

  { path: 'ListComment', component: ListCommentComponent },
  { path: 'NewComment', component: CreateCommentComponent },
  { path: 'UpdateComment/:id', component: UpdateCommentComponent },
  { path: 'SearchComment', component: FindCommentComponent },

  { path: 'ListUserAddress', component: ListUserAddressComponent },
  { path: 'NewUserAddress', component: CreateUserAddressComponent },
  { path: 'UpdateUserAddress/:id', component: UpdateUserAddressComponent },
  { path: 'SearchUserAddress', component: FindUserAddressComponent },

  { path: 'ListCreditCard', component: ListCreditCardComponent },
  { path: 'NewCreditCard', component: CreateCreditCardComponent },
  { path: 'UpdateCreditCard/:id', component: UpdateCreditCardComponent },
  { path: 'SearchCreditCard', component: FindCreditCardComponent },

  { path: 'ListRent', component: ListRentalActivitiesComponent },
  { path: 'NewRent', component: CreateRentalActivitiesComponent },
  { path: 'UpdateRent/:id', component: UpdateRentalActivitiesComponent },
  { path: 'SearchRent', component: FindRentalActivitiesComponent },

  { path: 'ListSubscription', component: ListSubscriptionComponent },
  { path: 'NewSubscription', component: CreateSubscriptionComponent },
  { path: 'UpdateSubscription/:id', component: UpdateSubscriptionComponent },
  { path: 'SearchSubscription', component: FindSubscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
