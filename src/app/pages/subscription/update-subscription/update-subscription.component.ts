import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-update-subscription',
  templateUrl: './update-subscription.component.html',
  styleUrls: ['./update-subscription.component.css'],
})
export class UpdateSubscriptionComponent implements OnInit {
  id: number = 0;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.subscriptionService.getSubscriptionById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.subscription = datos;
      },
      (error) => console.log(error)
    );
  }

  updateReservation() {
    this.subscriptionService
      .updateSubscription(this.id, this.subscription)
      .subscribe(
        (datos) => {
          console.log(datos);
          this.router.navigate(['ListSubscription']);
        },
        (error) => console.log(error)
      );
    this.subscription = new Subscription();
  }
}
