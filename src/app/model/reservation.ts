import { Customer } from './customer';
import { Vehicle } from './vehicle';

export class Reservation {
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

  constructor() {
    this.id = 0;
    this.startDate = '';
    this.endDate = '';
    this.reservationPrice = 0;
    this.customer = new Customer();
    this.vehicle = new Vehicle();
  }
}
