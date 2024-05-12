import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercentage'
})
export class DiscountPercentagePipe implements PipeTransform {

  transform(originalPrice: number, discountedPrice: number): number {
    const discount = originalPrice - discountedPrice;
    return Math.round((discount / originalPrice) * 100);
  }

}
