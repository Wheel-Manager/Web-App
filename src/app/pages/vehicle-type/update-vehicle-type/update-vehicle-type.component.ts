import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleType } from 'src/app/model/vehicle-type';
import { VehicleTypeService } from 'src/app/service/vehicle-type.service';

@Component({
  selector: 'app-update-vehicle-type',
  templateUrl: './update-vehicle-type.component.html',
  styleUrls: ['./update-vehicle-type.component.css'],
})
export class UpdateVehicleTypeComponent implements OnInit {
  id: number = 0;
  vehicleType: VehicleType = new VehicleType();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleTypeService: VehicleTypeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vehicleTypeService.getVehicleTypeById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.vehicleType = datos;
      },
      (error) => console.log(error)
    );
  }

  updateVehicleType() {
    this.vehicleTypeService
      .updateVehicleType(this.id, this.vehicleType)
      .subscribe(
        (datos) => {
          console.log(datos);
          this.router.navigate(['ListVehicleType']);
        },
        (error) => console.log(error)
      );
    this.vehicleType = new VehicleType();
  }
}
