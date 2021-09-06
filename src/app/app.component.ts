import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars = ['Ford', 'Chevrolet', 'Dodge'];
  selectedCars = ['Dodge'];
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  f = new FormControl(['Chevrolet'], Validators.required);
  f2 = new FormControl(true, Validators.required);
  f3 = new FormControl(null, Validators.required);
  f4 = new FormControl(null, Validators.required);

  constructor() {}
}
