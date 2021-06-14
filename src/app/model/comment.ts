export class Comment {
  id: number;
  content: string;
  publicationDate:string;
  userId:number;
  vehicleId:number;

  constructor() {
    this.id = 0;
    this.content = '';
    this.publicationDate = '';
    this.userId = 0;
    this.vehicleId = 0;
  }
}
