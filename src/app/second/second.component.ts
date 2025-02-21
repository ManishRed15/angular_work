import { Component } from '@angular/core';
import { ShapeService } from '../shape.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  shape: string = 'Circle';
  color: string = 'blue'; // Different default color

  constructor(private shapeService: ShapeService) {
    this.shapeService.selectedShape.subscribe(updatedShape => this.shape = updatedShape);
    this.shapeService.selectedColor.subscribe(updatedColor => this.color = updatedColor);
}
}