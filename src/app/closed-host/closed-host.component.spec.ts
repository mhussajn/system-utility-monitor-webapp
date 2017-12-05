import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedHostComponent } from './closed-host.component';

describe('ClosedHostComponent', () => {
  let component: ClosedHostComponent;
  let fixture: ComponentFixture<ClosedHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
