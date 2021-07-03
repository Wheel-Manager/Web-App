import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/model/status';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css'],
})
export class ListStatusComponent implements OnInit {
  statuses: Status[] = [];

  constructor(private router: Router, private statusService: StatusService) {}

  ngOnInit(): void {
    this.loadDataStatus();
  }

  loadDataStatus() {
    this.statusService
      .getStatusList()
      .subscribe((statuses) => (this.statuses = statuses));
  }

  deleteStatus(status: Status) {
    this.statusService
      .deleteStatus(status.id)
      .subscribe((data) => this.loadDataStatus());
  }

  updateStatus(status: Status) {
    this.router.navigate(['UpdateStatus', status.id]);
  }
}
