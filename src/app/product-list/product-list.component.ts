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
  length: number = 5
  count: number = 1;
  products: Product[] = RenderProductList(this.length)
  historyClick: number = -1
  chooseProduct: Product = this.products[0]

  filteringList(type: number) {
    if (this.historyClick === type) {
      this.products.reverse()
    } else {
      this.historyClick = type
      switch (type) {
        case 1:
          this.products.sort((a, b) => a.squirrels - b.squirrels); break;
        case 2:
          this.products.sort((a, b) => a.fats - b.fats); break;
        case 3:
          this.products.sort((a, b) => a.carbohydrates - b.carbohydrates); break;
        case 4:
          this.products.sort((a, b) => a.callories - b.callories); break;
        default:
          this.products.sort()
      }
    }




  }

  reRenderProductList() {
    this.length = this.length < 20 && this.length > 0 ? this.length : 20

    this.products = RenderProductList(this.length)
  }

  setChooseProduct(productClick: Product) {
    this.chooseProduct = productClick
  }
}

