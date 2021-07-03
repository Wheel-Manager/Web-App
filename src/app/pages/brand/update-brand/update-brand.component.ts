import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
})
export class UpdateBrandComponent implements OnInit {
  id: number = 0;
  brand: Brand = new Brand();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.brandService.getBrandById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.brand = datos;
      },
      (error) => console.log(error)
    );
  }

  updateBrand() {
    this.brandService.updateBrand(this.id, this.brand).subscribe(
      (datos) => {
        console.log(datos);
        this.router.navigate(['ListBrand']);
      },
      (error) => console.log(error)
    );
    this.brand = new Brand();
  }
}
