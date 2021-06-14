export class Address {
  id: number;
  latitude: number;
  longitude:number;
  description:string;

  constructor() {
    this.id = 0;
    this.latitude = 0;
    this.longitude = 0;
    this.description = '';
  }
}
