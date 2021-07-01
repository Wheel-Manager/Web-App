import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/model/credit-card';
import { CreditCardService } from 'src/app/service/credit-card.service';

@Component({
  selector: 'app-find-credit-card',
  templateUrl: './find-credit-card.component.html',
  styleUrls: ['./find-credit-card.component.css'],
})
export class FindCreditCardComponent implements OnInit {
  id: number = 0;
  cardNumber: string = '';
  creditCard: CreditCard = new CreditCard();
  creditCards: CreditCard[] = [];

  constructor(private creditCardService: CreditCardService) {}

  ngOnInit(): void {}

  searchCreditCardById() {
    this.creditCardService
      .getCreditCardById(this.id)
      .subscribe((creditCard) => {
        console.log(creditCard);
        this.creditCard = creditCard;
      });
  }

  searchCreditCardByName() {
    this.creditCardService
      .getCreditCardByName(this.cardNumber)
      .subscribe((creditCards) => {
        console.log(creditCards);
        this.creditCards = creditCards;
      });
  }
}
