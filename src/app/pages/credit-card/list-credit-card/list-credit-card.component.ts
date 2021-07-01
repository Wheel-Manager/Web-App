import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/model/credit-card';
import { CreditCardService } from 'src/app/service/credit-card.service';

@Component({
  selector: 'app-list-credit-card',
  templateUrl: './list-credit-card.component.html',
  styleUrls: ['./list-credit-card.component.css'],
})
export class ListCreditCardComponent implements OnInit {
  creditCards: CreditCard[] = [];

  constructor(
    private router: Router,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.loadDataCreditCard();
  }

  loadDataCreditCard() {
    this.creditCardService
      .getCreditCardList()
      .subscribe((creditCards) => (this.creditCards = creditCards));
  }

  deleteCreditCard(creditCard: CreditCard) {
    this.creditCardService.deleteCreditCard(creditCard.id).subscribe((data) => {
      this.loadDataCreditCard();
    });
  }

  updateCreditCard(creditCard: CreditCard) {
    this.router.navigate(['UpdateCreditCard', creditCard.id]);
  }
}
