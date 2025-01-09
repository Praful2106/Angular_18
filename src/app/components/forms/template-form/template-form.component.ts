import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
   userForm={
    fName:'',
    username:'',
    city:'',
    state:'',
    pin:'',
    isTermaccept:false
   }
   onSubmit(){
    console.log('userForm',this.userForm);
   }
   onReset(){
    this.userForm={
      fName:'',
      username:'',
      city:'',
      state:'',
      pin:'',
      isTermaccept:false
     }
   }
}
