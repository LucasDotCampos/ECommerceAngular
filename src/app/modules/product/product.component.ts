import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Observable<IProduct[]>;
  constructor(private apiService: ApiService) {
    this.products = this.apiService.productList();
  }
}