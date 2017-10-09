export class InventoryItem {

  name: String = 'Test';
  picked_up: Boolean = false;
  last_inventory_index: Number;

  constructor(name: string) {
    this.name = name;
  }

}
