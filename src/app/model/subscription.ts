export class Subscription {
  id: number;
  description: string;
  startDate: string;
  price: number;

  constructor() {
    this.id = 0;
    this.description = '';
    this.startDate = '';
    this.price = 0;
  }
}
