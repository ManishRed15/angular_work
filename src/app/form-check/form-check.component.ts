import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-check',
  imports: [FormsModule],
  templateUrl: './form-check.component.html',
  styleUrl: './form-check.component.css'
})
export class FormCheckComponent {
  userInput: string = '';
  displayValue: string = 'Angular';
  isBtnDisabled:  boolean = false;

  checkForm() {
    this.isBtnDisabled = this.userInput == this.displayValue;
  }

}
