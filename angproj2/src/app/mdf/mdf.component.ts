import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css',
  standalone:false
})
export class MdfComponent {
  userForm!:FormGroup
  employees:any = []
  constructor(private formBuilder:FormBuilder, private empSrvc:EmployeeService){
    this.userForm = formBuilder.group({
      userName:['', [Validators.required, Validators.pattern('^[a-zA-Z]{5,15}$')]],
      // email:['', [Validators.required]],
      // address:this.formBuilder.group({
      //   city:['', [Validators.required]]
      // })
    })
  }
  submitFormData(){
    console.log(this.userForm.value)
   this.empSrvc.saveEmployee(this.userForm.value)
  }
  getEmployees(){
    this.empSrvc.getEmployees().subscribe(res => {
      console.log(res)
      this.employees =res
    })
  }
}
