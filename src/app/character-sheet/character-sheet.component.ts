import { Component, OnInit, Input } from '@angular/core';

import { InventoryItem } from '../inventory/inventory-item';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
  providers: []
})
export class CharacterSheetComponent implements OnInit {

  @Input() inventory: Array<InventoryItem>;

  head: Array<InventoryItem> = [];
  body: InventoryItem;

  constructor(private dragulaService: DragulaService) { 

  	dragulaService.dropModel.subscribe((value) => console.log(value[1].getAttribute('inventory-id')));

  }

  ngOnInit() {
  }
}
