import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalActivities } from 'src/app/model/rental-activities';
import { RentalActivitiesService } from 'src/app/service/rental-activities.service';

@Component({
  selector: 'app-create-rental-activities',
  templateUrl: './create-rental-activities.component.html',
  styleUrls: ['./create-rental-activities.component.css'],
})
export class CreateRentalActivitiesComponent implements OnInit {
  rentalActivity: RentalActivities = new RentalActivities();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rentalActivitiesService: RentalActivitiesService
  ) {}

  ngOnInit(): void {}

  insertRentalActivities() {
    this.rentalActivitiesService
      .createRentalActivities(this.rentalActivity)
      .subscribe(
        (datos) => console.log(datos),
        (error) => console.log(error)
      );
    this.rentalActivity = new RentalActivities();
    this.router.navigate(['ListRent']);
  }
}
