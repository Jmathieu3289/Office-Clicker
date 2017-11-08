import { WindowComponent } from './../window/window.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WindowContentComponent } from '../window/window-content/window-content.component';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  public windows: Array<WindowComponent>;

  @Output() instanceCreated: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() windowClosed: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor() { }

  ngOnInit() {
  }

  onWindowClosed(window: WindowComponent) {
    this.windowClosed.emit(window);
  }

}
