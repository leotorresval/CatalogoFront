import { Routes } from '@angular/router';
import { ListProductsComponent } from '../products/list-products/list-products.component';
import { CreateComponent } from '../products/create/create.component';
import { EditProductComponent } from './module/adminProducts/edit-product/edit-product.component';

export const routes: Routes = [

    {path: '', redirectTo: 'app-list-products',pathMatch:'full'},
    {path: 'app-list-products',component: ListProductsComponent},
    {path: 'app-create', component:CreateComponent},
    {path: 'app-edit', component:EditProductComponent}

];
