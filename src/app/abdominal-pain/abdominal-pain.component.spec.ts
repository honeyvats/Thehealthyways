import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdominalPainComponent } from './abdominal-pain.component';

describe('AbdominalPainComponent', () => {
  let component: AbdominalPainComponent;
  let fixture: ComponentFixture<AbdominalPainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdominalPainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdominalPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
