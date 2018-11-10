import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverGroupListComponent } from './giver-group-list.component';

describe('GiverGroupListComponent', () => {
  let component: GiverGroupListComponent;
  let fixture: ComponentFixture<GiverGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
