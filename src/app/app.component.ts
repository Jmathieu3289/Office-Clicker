import { Component, ViewChild, ElementRef,
          Type, ComponentFactoryResolver, Compiler,
          ComponentRef, ViewContainerRef, OnInit } from '@angular/core';

import { WindowComponent } from './window/window.component';
import { WindowContentComponent } from './window/window-content/window-content.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

import { WindowType } from './window/window-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'app';
  public windows: Array<WindowComponent> = [];

  @ViewChild(DesktopComponent) desktop: DesktopComponent;
  @ViewChild(TaskbarComponent) taskbar: TaskbarComponent;
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

  constructor(private _elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: ViewContainerRef) {
      
  }

  ngOnInit() {
    this.createWindow(WindowType.HARDWARE_MANAGER);
  }

  createWindow(type: WindowType) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(WindowComponent);
    const ref = this.location.createComponent(factory);
    ref.instance.onClose.subscribe(r => this.onWindowClosed(r));
    ref.instance.type = type;
    this.windows.push(ref.instance);
    this.taskbar.addWindow(ref.instance);
  }

  onWindowClosed(window: WindowComponent) {
    const index: number = this.windows.indexOf(window);
    if (index > -1) {
      this.taskbar.removeWindow(window);
      this.windows.splice(index, 1);
    }
  }

}
