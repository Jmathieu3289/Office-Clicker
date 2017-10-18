import { Component, OnInit, Input } from '@angular/core';

import { WindowComponent } from '../../window/window.component';

@Component({
  selector: 'app-taskbar-item',
  templateUrl: './taskbar-item.component.html',
  styleUrls: ['./taskbar-item.component.css']
})
export class TaskbarItemComponent implements OnInit {

  name = 'My Files';
  active = false;

  @Input() windowComponent: WindowComponent;

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.active = !this.active;
    if (this.active && this.windowComponent) {
    	this.windowComponent.show();
    }else {
    	if (this.windowComponent) {
    		this.windowComponent.minimize();
    	}
    }
  }

}
