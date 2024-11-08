import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childRecAmtFromParnent:number  = 0;
  @Output() custEvent: EventEmitter<number> = new EventEmitter<number>();

   saving(){
      this.childRecAmtFromParnent++; //1001
      this.custEvent.emit(this.childRecAmtFromParnent)
   }
   shopping(){
    this.childRecAmtFromParnent--; //999
    this.custEvent.emit(this.childRecAmtFromParnent)
   }
}


