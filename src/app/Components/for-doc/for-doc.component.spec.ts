import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDocComponent } from './for-doc.component';

describe('ForDocComponent', () => {
  let component: ForDocComponent;
  let fixture: ComponentFixture<ForDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
