import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentAmount:number = 1000
  parentCompMethod(data:any){
   this.parentAmount = data
  }
}
