import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  startMenuActive = false;

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
