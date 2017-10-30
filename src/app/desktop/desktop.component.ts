import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WindowComponent } from '../window/window.component';
import { WindowContentComponent } from '../window/window-content/window-content.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  @Input() windows: Array<WindowComponent>;

  constructor() { }

  ngOnInit() {
  }

  windowMinimized(window: WindowComponent) {
  }

}
