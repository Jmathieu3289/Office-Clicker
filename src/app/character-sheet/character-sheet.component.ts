import { Component, OnInit, Input } from '@angular/core';

import { InventoryItem } from '../inventory/inventory-item';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
  providers: []
})
export class CharacterSheetComponent implements OnInit {

  @Input() inventory: Array<InventoryItem>;
  @Input() slots: Array<InventoryItem>;

  constructor() { 
  }

  onItemDrop(slot: string, e: any) {
    if(this.slots[slot]!= null){
      this.slots[slot].src = null;
      this.inventory.push(this.slots[slot]);
    }
    this.slots[slot] = e.dragData;
    if(this.slots[slot].src == null){
      this.inventory.splice(this.inventory.indexOf(this.slots[slot]),1);
    }else{
      this.slots[this.slots[slot].src] = null;
    }
    this.slots[slot].src = slot;
  }
  ngOnInit() {
  }
}
