import { Component } from '@angular/core';
import { ShapeService } from '../shape.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  shape: string = 'Circle';
  color: string = 'red';
  availableShapes = ['Circle', 'Rectangle', 'Square', 'Triangle'];
  availableColors = ['red', 'blue', 'green', 'yellow'];

  constructor(private shapeService: ShapeService) {}

  updateSelection() {
    this.shapeService.updateShape(this.shape);
    this.shapeService.updateColor(this.color);
}

}
