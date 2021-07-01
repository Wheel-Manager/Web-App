import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css'],
})
export class UpdateReservationComponent implements OnInit {
  id: number = 0;
  reservation: Reservation = new Reservation();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reservationService.getReservationById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.reservation = datos;
      },
      (error) => console.log(error)
    );
  }

  updateReservation() {
    this.reservationService
      .updateReservation(this.id, this.reservation)
      .subscribe(
        (datos) => {
          console.log(datos);
          this.router.navigate(['ListReservation']);
        },
        (error) => console.log(error)
      );
    this.reservation = new Reservation();
  }
}
