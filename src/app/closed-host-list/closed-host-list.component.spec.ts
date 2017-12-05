import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedHostListComponent } from './closed-host-list.component';

describe('ClosedHostListComponent', () => {
  let component: ClosedHostListComponent;
  let fixture: ComponentFixture<ClosedHostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedHostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedHostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
