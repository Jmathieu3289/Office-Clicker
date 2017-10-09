import { Component, OnInit } from '@angular/core';

import { InventoryItem } from './inventory-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory: Array<InventoryItem> = [];

  constructor() {
    this.inventory = [new InventoryItem('Head Item'), new InventoryItem('Body Item'), new InventoryItem('Weapon')];
  }

  ngOnInit() {
  }

  addTo($event: any) {
    if ($event) {
      console.log($event);
      this.inventory.push($event.dragData[1]);
      $event.dragData[1] = null;
    }
  }

}
