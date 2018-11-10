import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverGroupFormComponent } from './giver-group-form.component';

describe('GiverGroupFormComponent', () => {
  let component: GiverGroupFormComponent;
  let fixture: ComponentFixture<GiverGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
