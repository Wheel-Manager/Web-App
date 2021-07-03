import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/model/credit-card';
import { CreditCardService } from 'src/app/service/credit-card.service';

@Component({
  selector: 'app-update-credit-card',
  templateUrl: './update-credit-card.component.html',
  styleUrls: ['./update-credit-card.component.css'],
})
export class UpdateCreditCardComponent implements OnInit {
  id: number = 0;
  creditCard: CreditCard = new CreditCard();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.creditCardService.getCreditCardById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.creditCard = datos;
      },
      (error) => console.log(error)
    );
  }

  updateCreditCard() {
    this.creditCardService.updateCreditCard(this.id, this.creditCard).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListCreditCard']);
      },
      (error) => console.log(error)
    );
    this.creditCard = new CreditCard();
  }
}
