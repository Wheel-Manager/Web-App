export class Customer {
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

  constructor() {
    this.id = 0;
    this.username = '';
    this.password = '';
    this.email = '';
    this.name = '';
    this.lastName = '';
    this.imageUrl = '';
    this.dni = '';
    this.gender = '';
    this.birthDay = '';
  }
}
