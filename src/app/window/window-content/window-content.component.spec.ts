import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowContentComponent } from './window-content.component';

describe('WindowContentComponent', () => {
  let component: WindowContentComponent;
  let fixture: ComponentFixture<WindowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
