import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css'],
})
export class ListReservationComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.loadDataCustomers();
  }

  loadDataCustomers() {
    this.reservationService
      .getReservationList()
      .subscribe((reservations) => (this.reservations = reservations));
  }

  deleteCustomer(reservation: Reservation) {
    this.reservationService
      .deleteReservation(reservation.id)
      .subscribe((data) => {
        this.loadDataCustomers();
      });
  }

  updateCustomer(reservation: Reservation) {
    this.router.navigate(['UpdateReservation', reservation.id]);
  }
}
