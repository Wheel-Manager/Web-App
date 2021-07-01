import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalActivities } from 'src/app/model/rental-activities';
import { RentalActivitiesService } from 'src/app/service/rental-activities.service';

@Component({
  selector: 'app-list-rental-activities',
  templateUrl: './list-rental-activities.component.html',
  styleUrls: ['./list-rental-activities.component.css'],
})
export class ListRentalActivitiesComponent implements OnInit {
  rentalActivities: RentalActivities[] = [];

  constructor(
    private router: Router,
    private rentalActivitiesService: RentalActivitiesService
  ) {}

  ngOnInit(): void {
    this.loadDataRentalActivities();
  }

  loadDataRentalActivities() {
    this.rentalActivitiesService
      .getRentalActivitiesList()
      .subscribe((rentalActivities) => (this.rentalActivities = rentalActivities));
  }

  deleteRentalActivities(rentalActivities: RentalActivities) {
    this.rentalActivitiesService
      .deleteRentalActivities(rentalActivities.id)
      .subscribe((data) => {
        this.loadDataRentalActivities();
      });
  }

  updateRentalActivities(rentalActivities: RentalActivities) {
    this.router.navigate(['UpdateRent', rentalActivities.id]);
  }
}
