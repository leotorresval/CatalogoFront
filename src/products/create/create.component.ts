import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../app/service/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, HttpClientModule,
    ReactiveFormsModule, MatSnackBarModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private snackBar: MatSnackBar,
    private productService: ProductService) {

  }

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(),
    price: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    imagePath: new FormControl('', Validators.required)
  });

  guardar() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe({
        next: (response) => {
          this.snackBar.open('Datos guardados con exito', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          }

          )
          this.productForm.reset();
        },
        error: (err) => {
          this.snackBar.open('Error al guardar el producto', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          })
        }
      });
    } else{
      this.snackBar.open('Ingrese todos los datos','Cerrar',{
        duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'
      })
    }
  }

}
