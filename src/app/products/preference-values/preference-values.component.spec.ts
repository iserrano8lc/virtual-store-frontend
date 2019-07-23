import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceValuesComponent } from './preference-values.component';

describe('PreferenceValuesComponent', () => {
  let component: PreferenceValuesComponent;
  let fixture: ComponentFixture<PreferenceValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
