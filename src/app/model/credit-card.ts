export class CreditCard {
  id: number;
  cardNumber: string;
  expirationDate:string;
  cardCvv:string;
  userId:number;

  constructor() {
    this.id = 0;
    this.cardNumber = '';
    this.expirationDate = '';
    this.cardCvv = '';
    this.userId = 0;
  }
}
