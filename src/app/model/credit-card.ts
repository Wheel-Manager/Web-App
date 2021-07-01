import { Customer } from './customer';

export class CreditCard {
  id: number;
  cardNumber: string;
  expirationDate: string;
  cardCvv: string;
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
    this.cardNumber = '';
    this.expirationDate = '';
    this.cardCvv = '';
    this.customer = new Customer();
  }
}
