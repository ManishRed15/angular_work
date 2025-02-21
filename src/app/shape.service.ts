import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor() { }

  private shapeSubject = new BehaviorSubject<string>('Circle');
  private colorSubject = new BehaviorSubject<string>('red');

  selectedShape = this.shapeSubject.asObservable();
  selectedColor = this.colorSubject.asObservable();

  updateShape(shape: string) {
    this.shapeSubject.next(shape);
  }

  updateColor(color: string) {
    this.colorSubject.next(color);
  }
}
