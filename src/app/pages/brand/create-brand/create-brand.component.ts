import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css'],
})
export class CreateBrandComponent implements OnInit {
  brand: Brand = new Brand();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {}

  insertBrand() {
    this.brandService.createBrand(this.brand).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.brand = new Brand();
    this.router.navigate(['ListBrand']);
  }
}
