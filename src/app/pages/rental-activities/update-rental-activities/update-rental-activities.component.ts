import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalActivities } from 'src/app/model/rental-activities';
import { RentalActivitiesService } from 'src/app/service/rental-activities.service';

@Component({
  selector: 'app-update-rental-activities',
  templateUrl: './update-rental-activities.component.html',
  styleUrls: ['./update-rental-activities.component.css'],
})
export class UpdateRentalActivitiesComponent implements OnInit {
  id: number = 0;
  rentalActivity: RentalActivities = new RentalActivities();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rentalActivitiesService: RentalActivitiesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rentalActivitiesService.getRentalActivitiesById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.rentalActivity = datos;
      },
      (error) => console.log(error)
    );
  }

  updateRentalActivities() {
    this.rentalActivitiesService
      .updateRentalActivities(this.id, this.rentalActivity)
      .subscribe(
        (datos) => {
          console.log(datos);
          this.router.navigate(['ListRent']);
        },
        (error) => console.log(error)
      );
    this.rentalActivity = new RentalActivities();
  }
}
