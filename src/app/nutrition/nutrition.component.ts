import { Component } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent {

  display=false;
  toggle(){
    this.display=!this.display
  }
}
