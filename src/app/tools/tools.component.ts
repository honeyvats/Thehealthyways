import { Component } from '@angular/core';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  title = 'bmi-calculator';
  weight: number = 0;
  height: number = 0;

  calculateBMI() {
     return (this.weight / (this.height * this.height));

    // console.warn (this.weight / (this.height * this.height));
  }
  
}

