import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/model/status';
import { StatusService } from 'src/app/service/status.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css'],
})
export class UpdateStatusComponent implements OnInit {
  id: number = 0;
  status: Status = new Status();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.statusService.getStatusById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.status = datos;
      },
      (error) => console.log(error)
    );
  }

  updateStatus() {
    this.statusService.updateStatus(this.id, this.status).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListStatus']);
      },
      (error) => console.log(error)
    );
    this.status = new Status();
  }
}
