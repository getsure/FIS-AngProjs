import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChiruComponent } from './chiru/chiru.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChiruComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angproj3';
}
