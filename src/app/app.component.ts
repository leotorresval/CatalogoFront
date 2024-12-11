import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from '../products/create/create.component';
import { ListProductsComponent } from '../products/list-products/list-products.component';
import { MenuComponent } from './module/menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateComponent,ListProductsComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CatalogoFront';
}
