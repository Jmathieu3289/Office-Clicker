import { Component } from '@angular/core';

import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  windows: Array<string>;

  constructor() {
    this.windows = ['test', 'test'];
  }

}
