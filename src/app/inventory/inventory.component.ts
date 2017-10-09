import { Component, OnInit, Input } from '@angular/core';

import { InventoryItem } from './inventory-item';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: []
})
export class InventoryComponent implements OnInit {

  size: number = 144;
  @Input() inventory: Array<InventoryItem>;

  constructor(private dragulaService: DragulaService) {

    dragulaService.dropModel.subscribe((value, source) => console.log(value[1].getAttribute('inventory-id')));

    dragulaService.setOptions('first-bag', {
      removeOnSpill: false,
      revertOnSpill: true
    });


  }

  ngOnInit() {
  }

}
