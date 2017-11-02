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

  @Output() showWindow: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() hideWindow: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() onFocus: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor() {
    this.window.onFocus.subscribe(w => this.onFocus.emit(w));
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
    }
    this.hideWindow.emit(this.window);
  }

}
