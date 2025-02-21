import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCheckComponent } from './form-check/form-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormCheckComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
