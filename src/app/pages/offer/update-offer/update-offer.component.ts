import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/model/offer';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css'],
})
export class UpdateOfferComponent implements OnInit {
  id: number = 0;
  offer: Offer = new Offer();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getOfferById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.offer = datos;
      },
      (error) => console.log(error)
    );
  }

  updateOffer() {
    this.offerService.updateOffer(this.id, this.offer).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListOffer']);
      },
      (error) => console.log(error)
    );
    this.offer = new Offer();
  }
}
