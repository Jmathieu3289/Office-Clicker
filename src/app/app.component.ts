import { Component, ViewChild, ElementRef } from '@angular/core';

import { WindowComponent } from './window/window.component';
import { WindowContentComponent } from './window/window-content/window-content.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  windows: Array<WindowComponent> = [];

  @ViewChild(DesktopComponent) desktop: DesktopComponent;
  @ViewChild(TaskbarComponent) taskbar: TaskbarComponent;

  constructor(_elementRef: ElementRef ) {
    this.windows = [new WindowComponent(_elementRef)];
  }

  onWindowMinimized(window: WindowComponent) {
  }

  onWindowChanged(window: WindowComponent) {
  }

}
