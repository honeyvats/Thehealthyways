import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionTips27Component } from './nutrition-tips27.component';

describe('NutritionTips27Component', () => {
  let component: NutritionTips27Component;
  let fixture: ComponentFixture<NutritionTips27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionTips27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionTips27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
