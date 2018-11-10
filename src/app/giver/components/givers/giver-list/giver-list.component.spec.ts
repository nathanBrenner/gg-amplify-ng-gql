import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverListComponent } from './giver-list.component';

describe('GiverListComponent', () => {
  let component: GiverListComponent;
  let fixture: ComponentFixture<GiverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
