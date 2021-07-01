export class Offer {
  id: number;
  offerName: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  offerPrice: number;

  constructor() {
    this.id = 0;
    this.offerName = '';
    this.description = '';
    this.imageUrl = '';
    this.startDate = '';
    this.endDate = '';
    this.offerPrice = 0;
  }
}
