import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

	x_cubes: number[] = null;
	y_cubes: number[] = null;
	x_size: number = 30;
	y_size: number = 10;

	constructor() { 
		this.BuildInventory();
	}

	ngOnInit() {
	}

	BuildInventory(){
		this.x_cubes = Array(this.x_size).fill(0);
		this.y_cubes = Array(this.y_size).fill(0);
	}

}
