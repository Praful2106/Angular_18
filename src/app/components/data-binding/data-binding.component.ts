import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName:string="Angular";

inputType="checkbox";

myClassName:string="bg-primary";

rollNo:number=123;

isIndian:boolean=true;

currentDate:Date=new Date();

fullName=signal('Praful');

callEvent(message:string){
  alert(message)
  this.fullName.set("Sachin")
}
constructor(){
  
}
}
