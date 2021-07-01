import { Address } from './address';
import { Customer } from './customer';

export class UserAddress {
  id: number;
  selected: boolean;
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
  address: {
    id: number;
    longitude: number;
    latitude: number;
    description: string;
  };

  constructor() {
    this.id = 0;
    this.selected = false;
    this.customer = new Customer();
    this.address = new Address();
  }
}
