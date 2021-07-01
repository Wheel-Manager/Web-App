import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-find-offer',
  templateUrl: './find-offer.component.html',
  styleUrls: ['./find-offer.component.css'],
})
export class FindOfferComponent implements OnInit {
  id: number = 0;
  offerName: string = '';
  offer: Offer = new Offer();
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {}

  searchOfferById() {
    this.offerService.getOfferById(this.id).subscribe((offer) => {
      console.log(offer);
      this.offer = offer;
    });
  }

  searchOfferByName() {
    this.offerService.getOfferByName(this.offerName).subscribe((offers) => {
      console.log(offers);
      this.offers = offers;
    });
  }
}
