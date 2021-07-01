import { Customer } from './customer';
import { Vehicle } from './vehicle';

export class Comment {
  id: number;
  content: string;
  publicationDate: string;
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
    this.content = '';
    this.publicationDate = '';
    this.customer = new Customer();
    this.vehicle = new Vehicle();
  }
}
