import { Offer } from './offer';
import { Reservation } from './reservation';

export class RentalActivities {
  id: number;
  price: number;
  commission: number;
  insurancePrice: number;
  reservation: {
    id: number;
    startDate: string;
    endDate: string;
    reservationPrice: number;
    customer: {
      id: number;
      username: string;
      password: string;
      email: string;
      name: string;
      lastName: string;
      imageUrl: string;
      dni: string;
      gender: string;
      birthDay: string;
    };
    vehicle: {
      id: number;
      vehicleName: string;
      imageUrl: string;
      score: number;
      description: string;
      customer: {
        id: number;
        username: string;
        password: string;
        email: string;
        name: string;
        lastName: string;
        imageUrl: string;
        dni: string;
        gender: string;
        birthDay: string;
      };
      status: {
        id: number;
        statusName: string;
      };
      vehicleType: {
        id: number;
        typeName: string;
      };
      brand: {
        id: number;
        brandName: string;
      };
    };
  };
  offer: {
    id: number;
    offerName: string;
    description: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
    offerPrice: number;
  };

  constructor() {
    this.id = 0;
    this.price = 0;
    this.commission = 0;
    this.insurancePrice = 0;
    this.reservation = new Reservation();
    this.offer = new Offer();
  }
}
