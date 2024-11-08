import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private restUrl:string = "employees.json";  //localhost:8080/employees

  constructor(private httpClient:HttpClient){}

  getEmployeeList():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this.restUrl)
  }
}
