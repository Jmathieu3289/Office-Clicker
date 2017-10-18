import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowComponent } from './window.component';

describe('InventoryComponent', () => {
  let component: WindowComponent;
  let fixture: ComponentFixture<WindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
