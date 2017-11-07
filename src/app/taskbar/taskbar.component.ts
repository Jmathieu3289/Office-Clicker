import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WindowComponent } from '../window/window.component';
import { TaskbarItemComponent } from './taskbar-item/taskbar-item.component';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
  viewProviders: [WindowComponent]
})
export class TaskbarComponent implements OnInit {

  startMenuActive = false;
  time = Observable.interval(1000).map(x => new Date()).share();

  windows: Array<WindowComponent> = [];

  @Output() windowChanged: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
   this.startMenuActive = !this.startMenuActive;
  }

  closeMenu() {
    if (this.startMenuActive) {
      this.startMenuActive = false;
    }
  }

  addWindow(window: WindowComponent) {
    this.windows.forEach(w => {
      w.unfocus();
    });
    this.windows.push(window);
  }

  onWindowFocused(window: WindowComponent) {
    this.windows.forEach(w => {
      if (w !== window) {
        w.unfocus();
      }
    });
  }

  onWindowMinimized(window: WindowComponent) {
    this.windows.forEach(w => {
      if (w !== window) {

      }
    });
  }

  @HostListener('window:mousedown', ['$event'])
  onMousedown(event) {
    if (event.target.id !== 'taskbar-button') {
      this.closeMenu();
    }
  }

}
