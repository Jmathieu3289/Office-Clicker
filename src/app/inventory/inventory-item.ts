export class InventoryItem {

  static PREFIXES = ['Speedy', 'Sharp', 'Whacky'];
  static SUFFIXES = ['Of Might', 'Of Speed', 'Of Charm'];

  name: string;
  type: string;
  img_id: string;
  uuid: any;

  constructor(name: string, type: string) {
    this.name = InventoryItem.PREFIXES[Math.floor(Math.random()*InventoryItem.PREFIXES.length)] + " " + name + " " + InventoryItem.SUFFIXES[Math.floor(Math.random()*InventoryItem.SUFFIXES.length)];
    this.type = type;
    this.uuid = this.uuidv4();
    if(this.type=='head'){
     this.img_id = '/assets/Helmet/CommandButtons/BTNINV_Helmet_0'+Math.ceil(Math.random()*9)+'.jpg';
    }else if(this.type=='body'){
     this.img_id = '/assets/Chest/CommandButtons/BTNINV_Chest_Chain_0'+Math.ceil(Math.random()*9)+'.jpg';
    }else{
     this.img_id = '/assets/Weapon/CommandButtons/BTNINV_Sword_0'+Math.ceil(Math.random()*9)+'.jpg'; 
    }
  }

  uuidv4() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c:any) =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

}
