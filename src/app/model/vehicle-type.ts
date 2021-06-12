export class VehicleType {
  id: number;
  vehicleName: string;
  imageUrl: string;
  score: number;
  description: string;
  customerId: number;
  brandId: number;
  statusId: number;
  vehicleTypeId: number;

  constructor() {
    this.id = 0;
    this.vehicleName = '';
    this.imageUrl = '';
    this.score = 0;
    this.description = '';
    this.customerId = 0;
    this.brandId = 0;
    this.statusId = 0;
    this.vehicleTypeId = 0;
  }
}
