import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-find-subscription',
  templateUrl: './find-subscription.component.html',
  styleUrls: ['./find-subscription.component.css'],
})
export class FindSubscriptionComponent implements OnInit {
  id: number = 0;
  startDate: string = '';
  subscription: Subscription = new Subscription();
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {}

  searchSubscriptionById() {
    this.subscriptionService
      .getSubscriptionById(this.id)
      .subscribe((subscription) => {
        console.log(subscription);
        this.subscription = subscription;
      });
  }

  searchSubscriptionByStartDate() {
    this.subscriptionService
      .getSubscriptionByStartDate(this.startDate)
      .subscribe((subscriptions) => {
        console.log(subscriptions);
        this.subscriptions = subscriptions;
      });
  }
}
