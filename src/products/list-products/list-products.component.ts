import { Component } from '@angular/core';
import { ProductService } from '../../app/service/product/product.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule,MatGridListModule,MatFormFieldModule,MatInputModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  products:any;
  constructor(private productService: ProductService ){
    this.productService.getProducts().subscribe((response) => {
      this.products= response;
    });

  }
}
