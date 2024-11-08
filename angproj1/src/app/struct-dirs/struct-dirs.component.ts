import { Component } from '@angular/core';

@Component({
  selector: 'app-struct-dirs',
  templateUrl: './struct-dirs.component.html',
  styleUrl: './struct-dirs.component.css'
})
export class StructDirsComponent {
   isProductAvailable:boolean = false;
   products:string[] = ['samsung tv', 'canon printer', 'oneplus mobile']
   employees = [
    {empId:101, empName:"abc", empSal:20000},
    {empId:102, empName:"jkl", empSal:30000},
    {empId:103, empName:"xyz", empSal:40000}
  ]
}
