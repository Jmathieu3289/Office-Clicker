import { Component, OnInit, Input } from '@angular/core';

import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  @Input() Windows: Array<WindowComponent>;

  constructor() { }

  ngOnInit() {
  }

}
