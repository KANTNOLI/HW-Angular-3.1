import { Pipe, PipeTransform } from '@angular/core';
import Product from '../interfaces/product.interface';

@Pipe({
  name: 'rndCalls',
  standalone: false
})
export class RndCallsPipe implements PipeTransform {



  transform(value: Product, count: number): string {
    console.log(value);

    return `${value.title} ${count}X: ${value.squirrels * count} ${value.fats * count} ${value.carbohydrates * count} ${value.callories * count} `;
  }

}
