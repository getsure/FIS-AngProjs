import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  getUserDetails(value:any){
    console.log(`Getting UserName from Temp: ${value}`)
  }
}
