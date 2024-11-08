import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {
  data:any;
  constructor(private dataSrvc:DataService){}

  ngOnInit(): void {
      this.dataSrvc.dataObs$.subscribe(res => this.data = res)
  }

  sendData(){
    this.dataSrvc.getDataFromComps("Hello, This is Component One...")
  }

}
