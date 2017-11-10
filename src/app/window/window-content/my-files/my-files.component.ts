import { Component, OnInit } from '@angular/core';
import { WindowContentComponent } from '../window-content.component';

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.css']
})
export class MyFilesComponent extends WindowContentComponent implements OnInit {

  public inventory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { 
    super();
    this.title = 'My Files';
  }

  ngOnInit() {
  }

}
