import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/model/credit-card';
import { CreditCardService } from 'src/app/service/credit-card.service';

@Component({
  selector: 'app-create-credit-card',
  templateUrl: './create-credit-card.component.html',
  styleUrls: ['./create-credit-card.component.css'],
})
export class CreateCreditCardComponent implements OnInit {
  creditCard: CreditCard = new CreditCard();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {}

  insertCreditCard() {
    this.creditCardService.createCreditCard(this.creditCard).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.creditCard = new CreditCard();
    this.router.navigate(['ListCreditCard']);
  }
}
