import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-find-reservation',
  templateUrl: './find-reservation.component.html',
  styleUrls: ['./find-reservation.component.css'],
})
export class FindReservationComponent implements OnInit {
  id: number = 0;
  startDate: string = '';
  endDate: string = '';
  reservation: Reservation = new Reservation();
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {}

  searchReservationById() {
    this.reservationService
      .getReservationById(this.id)
      .subscribe((reservation) => {
        console.log(reservation);
        this.reservation = reservation;
      });
  }

  searchReservationBetweenDates() {
    this.reservationService
      .getReservationBetweenDates(this.startDate, this.endDate)
      .subscribe((reservations) => {
        console.log(reservations);
        this.reservations = reservations;
      });
  }
}
