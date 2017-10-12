import { Component, OnInit, Input } from '@angular/core';

import { InventoryItem } from './inventory-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: []
})
export class InventoryComponent implements OnInit {

  size: number = 144;
  @Input() inventory: Array<InventoryItem>;
  @Input() slots: Array<InventoryItem>;

  constructor() {
  }

  ngOnInit() {
  }

  onItemDrop(e: any) {
    if(e.dragData.src != null){
    	this.slots[e.dragData.src] = null;
    	e.dragData.src = null;
    	this.inventory.push(e.dragData);
    }
  }

}
