import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  numbers = Array.from({length:50}, (_, i)=>i+1);
  filters = [
    { label: 'Number divisible by 2', value: 2, active: false },
    { label: 'Number divisible by 3', value: 3, active: false },
    { label: 'Number divisible by 5', value: 5, active: false },
    { label: 'Number divisible by 10', value: 10, active: false },
  ];

  toggleFilter(index: number) {
    this.filters[index].active = !this.filters[index].active;
  }

  isHighlighted(num: number): boolean {
    return this.filters.some(filter => filter.active && num % filter.value === 0);
  }

  clearFilters() {
    this.filters.forEach(filter => (filter.active = false));
  }

}
