import { Component, OnInit, Input, ViewChild, 
        ViewContainerRef, Type, ComponentRef, ComponentFactoryResolver, 
        Compiler, OnChanges, AfterViewInit, EventEmitter, Output } from '@angular/core';

import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: Type<Component>;
  cmpRef: ComponentRef<Component>;
  private isViewInitialized:boolean = false;

  @Output() instanceCreated: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      // when the `type` input changes we destroy a previously 
      // created component before creating the new one
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory)
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

  ngAfterViewInit() {
    this.instanceCreated.emit(this.cmpRef.instance as WindowComponent);
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }    
  }

}
