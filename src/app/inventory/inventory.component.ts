import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';


import { InventoryItem } from './inventory-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: []
})
export class InventoryComponent implements OnInit {

  size = 144;
  state = 'windowed';
  visible = true;
  left = 0;
  top = 0;

  private el: HTMLElement;

  private mouseDown = false;
  private xOffset = 0;
  private yOffset = 0;

  @Input() inventory: Array<InventoryItem>;
  @Input() slots: Array<InventoryItem>;

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

  onItemDrop(e: any) {
    if (e.dragData.src != null) {
      this.slots[e.dragData.src] = null;
      e.dragData.src = null;
      this.inventory.push(e.dragData);
    }
  }

  minimize() {
    this.visible = false;
  }

  close() {
    this.visible = false;
  }

  toggleSize() {
    if (this.state === 'windowed') {
      this.state = 'fullscreen';
    }else {
      this.state = 'windowed';
    }
  }

}
