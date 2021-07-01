import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css'],
})
export class ListBrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private router: Router, private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadDataBrand();
  }

  loadDataBrand() {
    this.brandService
      .getBrandList()
      .subscribe((brands) => (this.brands = brands));
  }

  deleteBrand(brand: Brand) {
    this.brandService
      .deleteBrand(brand.id)
      .subscribe((data) => this.loadDataBrand());
  }

  updateBrand(brand: Brand) {
    this.router.navigate(['UpdateBrand', brand.id]);
  }
}
