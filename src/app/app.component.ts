import { Component } from '@angular/core';
import { InventoryItem } from './inventory/inventory-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  inventory: Array<InventoryItem> = Array();

  constructor(){
 
    for(var i=0; i<3; i++){
      this.inventory[i*3+0] = new InventoryItem('Head Item');
      this.inventory[i*3+1] = new InventoryItem('Body Item');
      this.inventory[i*3+2] = new InventoryItem('Weapon');
    }

  }

}
