import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = 'http://localhost:8090/products/'
  constructor(private http:HttpClient) { }
  

  getProducts():Observable<any>{
    return this.http.get(this.apiURL);
  }
  saveProduct(product:any):Observable<any>{
    return this.http.post(this.apiURL,product)
  }

  deleteProduct(code:any):Observable<any>{
    return this.http.delete(this.apiURL+"delete/"+code)
  }

}
