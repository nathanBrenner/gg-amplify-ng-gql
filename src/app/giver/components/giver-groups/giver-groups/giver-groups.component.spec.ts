import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverGroupsComponent } from './giver-groups.component';

describe('GiverGroupsComponent', () => {
  let component: GiverGroupsComponent;
  let fixture: ComponentFixture<GiverGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
