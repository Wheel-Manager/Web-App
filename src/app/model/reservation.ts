export class Reservation {
  id: number;
  startDate: string;
  endDate:string;
  price:number;
  userId:number;
  vehicleId:number;

  constructor() {
    this.id = 0;
    this.startDate = '';
    this.endDate = '';
    this.price = 0;
    this.userId = 0;
    this.vehicleId = 0;
  }
}
