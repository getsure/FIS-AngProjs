import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empRestfulUrl:string = "http://localhost:3000/employees"

  constructor(private httpClient:HttpClient) { }

  saveEmployee(employee:any){
    console.log(employee)
    return this.httpClient.post(this.empRestfulUrl, employee)
  }

  getEmployees(){
    console.log(this.httpClient.get(this.empRestfulUrl))
    return this.httpClient.get(this.empRestfulUrl)
  }
}
