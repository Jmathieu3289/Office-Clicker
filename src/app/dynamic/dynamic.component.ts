import { Component, OnInit, Input, ViewChild,
        ViewContainerRef, Type, ComponentRef, ComponentFactoryResolver,
        Compiler, OnChanges, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: Type<Component>;
  cmpRef: ComponentRef<Component>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}

  updateComponent() {

    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    // this.compRef.instance.someProperty = 'someValue';
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
  }

  ngOnInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
