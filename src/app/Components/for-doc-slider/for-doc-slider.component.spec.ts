import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDocSliderComponent } from './for-doc-slider.component';

describe('ForDocSliderComponent', () => {
  let component: ForDocSliderComponent;
  let fixture: ComponentFixture<ForDocSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDocSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDocSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
