import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {


  showFormOne: boolean;
  showFormTwo: boolean;
  constructor() { }

  ngOnInit() {
    this.showFormOne = false;
    this.showFormTwo = false;
  }

  toggleFormOne() {
    this.showFormOne = !this.showFormOne;
  }


  toggleFormTwo() {
    this.showFormTwo = !this.showFormTwo;
  }
}
