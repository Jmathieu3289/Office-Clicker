import { WindowComponent } from './../window/window.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WindowContentComponent } from '../window/window-content/window-content.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { WindowType } from '../window/window-type.enum';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  public windows: Array<WindowComponent>;

  @Output() instanceCreated: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() windowClosed: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();
  @Output() openWindow: EventEmitter<WindowType> = new EventEmitter<WindowType>();

  constructor() { }

  ngOnInit() {
  }

  public onWindowClosed(window: WindowComponent) {
    this.windowClosed.emit(window);
  }

  public openMyFiles(): void {
    this.openWindow.emit(WindowType.MY_FILES);
  }

}
