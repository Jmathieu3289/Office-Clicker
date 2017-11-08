import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-content',
  templateUrl: './window-content.component.html',
  styleUrls: ['./window-content.component.css']
})
export class WindowContentComponent implements OnInit {

  public title = 'Default';
  public status = 'No Status';

  constructor() { }

  ngOnInit() {
  }

  public getTitle(): string {
    return this.title;
  }

}
