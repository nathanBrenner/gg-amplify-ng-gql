import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverGroupComponent } from './giver-group.component';

describe('GiverGroupComponent', () => {
  let component: GiverGroupComponent;
  let fixture: ComponentFixture<GiverGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
