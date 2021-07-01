import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
})
export class CreateReservationComponent implements OnInit {
  reservation: Reservation = new Reservation();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {}

  insertReservation() {
    this.reservationService.createReservation(this.reservation).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.reservation = new Reservation();
    this.router.navigate(['ListReservation']);
  }
}
