export class InventoryItem {

  name: string = 'Test';
  uuid: any;
  picked_up: boolean = false;
  last_inventory_index: number;

  constructor(name: string) {
    this.name = name;
    this.uuid = this.uuidv4();
  }

  uuidv4() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c:any) =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

}
