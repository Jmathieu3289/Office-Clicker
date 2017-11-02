import { Component, ViewChild, ElementRef, Type } from '@angular/core';

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

  windows: Array<Type<WindowComponent>> = [];

  @ViewChild(DesktopComponent) desktop: DesktopComponent;
  @ViewChild(TaskbarComponent) taskbar: TaskbarComponent;

  constructor(_elementRef: ElementRef ) {
    this.windows = [WindowComponent,WindowComponent];
  }

  onInstanceCreated(window: WindowComponent) {
    this.taskbar.addWindow(window);
  }

}
