import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/model/status';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.css'],
})
export class CreateStatusComponent implements OnInit {
  status: Status = new Status();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {}

  insertStatus() {
    this.statusService.createStatus(this.status).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.status = new Status();
    this.router.navigate(['List']);
  }
}
