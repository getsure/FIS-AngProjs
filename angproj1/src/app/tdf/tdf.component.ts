import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  submitUserFormData(userFormData:any){
    console.log(userFormData.value)
  }
}
