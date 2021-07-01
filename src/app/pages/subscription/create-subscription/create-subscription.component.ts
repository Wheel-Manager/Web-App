import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css'],
})
export class CreateSubscriptionComponent implements OnInit {
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {}

  insertSubscription() {
    this.subscriptionService.createSubscription(this.subscription).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.subscription = new Subscription();
    this.router.navigate(['ListSubscription']);
  }
}
