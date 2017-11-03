import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { WindowComponent } from '../../window/window.component';

@Component({
  selector: 'app-taskbar-item',
  templateUrl: './taskbar-item.component.html',
  styleUrls: ['./taskbar-item.component.css']
})
export class TaskbarItemComponent implements OnInit {

  name = 'My Files';

  @Input() window: WindowComponent;

  @Output() windowFocused: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleStatus() {
    if (this.window.active) {
          this.window.active = false;
          this.window.visible = false;
    } else {
        this.window.active = true;
        this.window.visible = true;
        this.windowFocused.emit(this.window);
    }
  }

}
