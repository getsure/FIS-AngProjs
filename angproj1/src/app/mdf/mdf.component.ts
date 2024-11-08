import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css'
})
export class MdfComponent {

  userForm!:FormGroup
  submitFormData(){
   console.log(this.userForm.value)
  }
}
