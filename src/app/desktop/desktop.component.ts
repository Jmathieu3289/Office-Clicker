import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WindowComponent } from '../window/window.component';
import { WindowContentComponent } from '../window/window-content/window-content.component';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  @Input() windows: Array<WindowComponent>;

  @Output() instanceCreated: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() onFocus: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor() { }

  ngOnInit() {
  }

  onInstanceCreated(window: WindowComponent) {
    this.instanceCreated.emit(window);
  }

  windowMinimized(window: WindowComponent) {
  }

}
