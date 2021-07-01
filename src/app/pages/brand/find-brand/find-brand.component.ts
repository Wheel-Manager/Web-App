import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-find-brand',
  templateUrl: './find-brand.component.html',
  styleUrls: ['./find-brand.component.css'],
})
export class FindBrandComponent implements OnInit {
  id: number = 0;
  brandName: string = '';
  brand: Brand = new Brand();
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {}

  searchBrandById() {
    this.brandService.getBrandById(this.id).subscribe((brand) => {
      console.log(brand);
      this.brand = brand;
    });
  }

  searchBrandByBrandName() {
    this.brandService
      .getBrandByBrandName(this.brandName)
      .subscribe((brands) => {
        console.log(brands);
        this.brands = brands;
      });
  }
}
