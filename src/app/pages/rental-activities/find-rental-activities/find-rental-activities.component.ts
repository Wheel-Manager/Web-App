import { Component, OnInit } from '@angular/core';
import { RentalActivities } from 'src/app/model/rental-activities';
import { RentalActivitiesService } from 'src/app/service/rental-activities.service';

@Component({
  selector: 'app-find-rental-activities',
  templateUrl: './find-rental-activities.component.html',
  styleUrls: ['./find-rental-activities.component.css'],
})
export class FindRentalActivitiesComponent implements OnInit {
  id: number = 0;
  rentalActivity: RentalActivities = new RentalActivities();

  constructor(private rentalActivitiesService: RentalActivitiesService) {}

  ngOnInit(): void {}

  searchRentalActivitiesById() {
    this.rentalActivitiesService
      .getRentalActivitiesById(this.id)
      .subscribe((rentalActivity) => {
        console.log(rentalActivity);
        this.rentalActivity = rentalActivity;
      });
  }
}
