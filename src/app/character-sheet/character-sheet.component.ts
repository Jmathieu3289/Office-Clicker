import { Component, OnInit } from '@angular/core';

import { InventoryItem } from '../inventory/inventory-item';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  head: Array<InventoryItem>;

  constructor() { }

  ngOnInit() {
  }

  transferDataSuccess($event: any) {
    $event.dragData[0].splice($event.dragData[0].indexOf($event.dragData[1]), 1);
    this.head = $event.dragData[1];
  }

}
