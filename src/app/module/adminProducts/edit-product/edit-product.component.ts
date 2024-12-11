import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../../../service/product/product.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CommonModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  products: any;
  constructor(private snackBar: MatSnackBar, private productService: ProductService) {
    this.productService.getProducts().subscribe((response) => {
      this.products = response
    })
  }

  delete(code: any) {
    console.log(code)
    this.productService.deleteProduct(code).subscribe({
      next: (response) => {
        this.snackBar.open('Producto eliminado con exito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      }

    })
  }
}
