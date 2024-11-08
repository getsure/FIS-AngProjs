import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  data:any;
  constructor(private dataSrvc:DataService){}

  ngOnInit(): void {
      this.dataSrvc.dataObs$.subscribe(res => this.data = res)
  }

  sendDataFromSecondComp(){
    this.dataSrvc.getDataFromComps("Hello, This is Component Two...")
  }
}
