import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //create FormGroup using FormBuilder
    //add validation using Angular's built in form validator
    this.personForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(11)]]
    })
  }


  submit(){
    console.log(this.personForm);
  }

  logForm(){
    console.log(this.personForm);
  }

  patchEmail(){
    this.personForm.patchValue({
      'email': 'patchedEmailValue@example.com' 
    })
  }
}
