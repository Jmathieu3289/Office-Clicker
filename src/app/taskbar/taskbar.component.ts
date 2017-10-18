import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  startMenuActive = false;
  time = Observable.interval(1000).map(x => new Date()).share();

  @Input() Windows: Array<WindowComponent>;

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

}
