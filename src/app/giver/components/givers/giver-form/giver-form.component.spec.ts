import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverFormComponent } from './giver-form.component';

describe('GiverFormComponent', () => {
  let component: GiverFormComponent;
  let fixture: ComponentFixture<GiverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
