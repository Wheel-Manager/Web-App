import { Brand } from './brand';
import { Customer } from './customer';
import { Status } from './status';
import { VehicleType } from './vehicle-type';

export class Vehicle {
  id: number;
  vehicleName: string;
  imageUrl: string;
  score: number;
  description: string;
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
  status: {
    id: number;
    statusName: string;
  };
  vehicleType: {
    id: number;
    typeName: string;
  };
  brand: {
    id: number;
    brandName: string;
  };

  constructor() {
    this.id = 0;
    this.vehicleName = '';
    this.imageUrl = '';
    this.score = 0;
    this.description = '';
    this.customer = new Customer();
    this.brand = new Brand();
    this.status = new Status();
    this.vehicleType = new VehicleType();
  }
}
