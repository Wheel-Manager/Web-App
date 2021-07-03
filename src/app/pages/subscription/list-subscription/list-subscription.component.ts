import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.css'],
})
export class ListSubscriptionComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.loadDataSubscription();
  }

  loadDataSubscription() {
    this.subscriptionService
      .getSubscriptionList()
      .subscribe((subscriptions) => (this.subscriptions = subscriptions));
  }

  deleteSubscription(subscriptions: Subscription) {
    this.subscriptionService
      .deleteSubscription(subscriptions.id)
      .subscribe((data) => {
        this.loadDataSubscription();
      });
  }

  updateSubscription(subscriptions: Subscription) {
    this.router.navigate(['UpdateSubscription', subscriptions.id]);
  }
}
