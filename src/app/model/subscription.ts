import { Customer } from './customer';

export class Subscription {
  id: number;
  description: string;
  startDate: string;
  subscriptionPrice: number;
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

  constructor() {
    this.id = 0;
    this.description = '';
    this.startDate = '';
    this.subscriptionPrice = 0;
    this.customer = new Customer();
  }
}
