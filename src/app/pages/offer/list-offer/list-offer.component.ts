import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css'],
})
export class ListOfferComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private router: Router, private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadDataOffer();
  }

  loadDataOffer() {
    this.offerService.getOfferList().subscribe((offers) => {
      console.log(offers);
      this.offers = offers;
      console.log(this.offers);
    });
  }

  deleteOffer(offer: Offer) {
    this.offerService
      .deleteOffer(offer.id)
      .subscribe((data) => this.loadDataOffer());
  }

  updateOffer(offer: Offer) {
    this.router.navigate(['UpdateOffer', offer.id]);
  }
}
