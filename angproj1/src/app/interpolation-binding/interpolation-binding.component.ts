import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent {
  productName:string = "samsung tv"
  getProductDetails(){
    return `ProductName: ${this.productName}`
  }
}
