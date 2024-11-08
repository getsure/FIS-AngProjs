import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data:string = "Hello All ! This is Admin. How are you?"  
  private dataSource = new BehaviorSubject<any>(this.data)
  dataObs$ = this.dataSource.asObservable()

  getDataFromComps(dataFromComps:any){
    this.dataSource.next(dataFromComps)
  }
}
