import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  employees$:Observable<any[]> | undefined
  private subscription!:Subscription
  
  constructor(private employeeService: EmployeeService){ }

  ngOnInit(){
   this.employees$ =  this.employeeService.getEmployeeList()
  }  

}

