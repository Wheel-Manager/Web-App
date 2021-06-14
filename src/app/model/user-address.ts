export class UserAddress {
  id: number;
  selected: boolean;
  userId: number;
  addressId: number;

  constructor() {
    this.id = 0;
    this.selected = false;
    this.userId = 0;
    this.addressId = 0;
  }
}
