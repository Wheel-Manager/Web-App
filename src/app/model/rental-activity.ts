export class RentalActivity {
  id: number;
  price: number;
  commission:number;
  insurancePrice:number;
  reservationId:number;
  offerId:number;

  constructor() {
    this.id = 0;
    this.price = 0;
    this.commission = 0;
    this.insurancePrice = 0;
    this.reservationId = 0;
    this.offerId = 0;
  }
}
