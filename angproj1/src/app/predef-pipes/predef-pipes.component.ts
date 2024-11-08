import { Component } from '@angular/core';

@Component({
  selector: 'app-predef-pipes',
  templateUrl: './predef-pipes.component.html',
  styleUrl: './predef-pipes.component.css'
})
export class PredefPipesComponent {
  empName:string = "suresh kumar kad"
  sysDate:Date = new Date()
  myPrice: number = 500.23
  product:object = {productId:101, productName:`samsung tv`}
}
