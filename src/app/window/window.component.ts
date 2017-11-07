import { Component, OnInit, Input, HostListener, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

import { WindowContentComponent } from './window-content/window-content.component';


@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  providers: []
})
export class WindowComponent implements OnInit {

  public size = 144;
  public state = 'windowed';
  public visible = true;
  public left = 0;
  public top = 0;
  public title = 'Untitled';
  public status = 'No status';
  public active = true;

  private el: HTMLElement;

  private mouseDown = false;
  private xOffset = 0;
  private yOffset = 0;
  private zIndex = 0;
  private windowedLeft = 0;
  private windowedTop = 0;

  @Input() component: typeof WindowContentComponent;

  @Output() onMinimize = new EventEmitter<WindowComponent>();
  @Output() onFocus = new EventEmitter<WindowComponent>();

  @HostListener('window:mouseup')
  onWindowMouseup() {
      this.mouseDown = false;
  }

  @HostListener('mouseup')
  onMouseup() {
      this.mouseDown = false;
  }

  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
      if (this.mouseDown && this.state === 'windowed') {
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

  constructor(elementRef: ElementRef, private ref: ChangeDetectorRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
  }

  public minimize() {
    this.visible = false;
    this.active = false;
    this.onMinimize.emit(this);
  }

  public unfocus() {
    this.zIndex = 0;
    this.active = false;
    this.ref.detectChanges();
  }

  public focus() {
    this.zIndex = 1;
    this.active = true;
    this.onFocus.emit(this);
  }

  public show() {
    this.visible = true;
  }

  public close() {
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
