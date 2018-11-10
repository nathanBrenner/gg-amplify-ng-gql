import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiversComponent } from './givers.component';

describe('GiversComponent', () => {
  let component: GiversComponent;
  let fixture: ComponentFixture<GiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
