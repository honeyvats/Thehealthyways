import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthConditionComponent } from './health-condition.component';

describe('HealthConditionComponent', () => {
  let component: HealthConditionComponent;
  let fixture: ComponentFixture<HealthConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
