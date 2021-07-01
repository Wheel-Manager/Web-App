import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent implements OnInit {
  offer: Offer = new Offer();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {}

  insertOffer() {
    this.offerService.createOffer(this.offer).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.offer = new Offer();
    this.router.navigate(['ListOffer']);
  }
}
