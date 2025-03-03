import { Component } from '@angular/core';
import Product from '../interfaces/product.interface';
import RenderProductList from '../assets/renderProductList';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = RenderProductList(5)

  filteringList(type: number) {
    this.products.sort((a, b) => )
  }
}

