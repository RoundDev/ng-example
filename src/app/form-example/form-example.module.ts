import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormExampleComponent } from './form-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormOneComponent, 
    FormTwoComponent, FormExampleComponent
  ],
  exports: [
    FormExampleComponent
  ]
})
export class FormExampleModule { }
