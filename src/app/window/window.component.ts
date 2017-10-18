import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  providers: []
})
export class WindowComponent implements OnInit {

  size = 144;
  state = 'fullscreen';
  visible = true;
  left = 0;
  top = 0;
  title = 'Untitled';
  status = 'No status';

  private el: HTMLElement;

  private mouseDown = false;
  private xOffset = 0;
  private yOffset = 0;
  private zIndex = 0;
  private windowedLeft = 0;
  private windowedTop = 0;

  @HostListener('window:mouseup')
  onWindowMouseup() {
      console.log('mouse up');
      this.mouseDown = false;
  }

  @HostListener('mouseup')
  onMouseup() {
      this.mouseDown = false;
  }

  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.mouseDown) {
        this.left = event.clientX - this.xOffset;
        this.top = event.clientY - this.yOffset;
      }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
      if (event.target.tagName === 'H1') {
        this.mouseDown = true;
        this.xOffset = event.clientX - this.left;
        this.yOffset = event.clientY - this.top;
      }
  }

  constructor(elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
  }

  minimize() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  toggleSize() {
    if (this.state === 'windowed') {
      this.state = 'fullscreen';
      this.windowedLeft = this.left;
      this.windowedTop = this.top;
      this.left = 0;
      this.top = 0;
    }else {
      this.state = 'windowed';
      this.left = this.windowedLeft;
      this.top = this.windowedTop;
    }
  }

}
