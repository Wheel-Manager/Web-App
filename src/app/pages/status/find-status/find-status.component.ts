import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-find-status',
  templateUrl: './find-status.component.html',
  styleUrls: ['./find-status.component.css'],
})
export class FindStatusComponent implements OnInit {
  id: number = 0;
  statusName: string = '';
  status: Status = new Status();
  statuses: Status[] = [];

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {}

  searchStatusById() {
    this.statusService.getStatusById(this.id).subscribe((status) => {
      console.log(status);
      this.status = status;
    });
  }

  searchStatusByStatusName() {
    this.statusService
      .getStatusByStatusName(this.statusName)
      .subscribe((statuses) => {
        console.log(statuses);
        this.status = statuses;
      });
  }
}
