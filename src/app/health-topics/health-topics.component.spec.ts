import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTopicsComponent } from './health-topics.component';

describe('HealthTopicsComponent', () => {
  let component: HealthTopicsComponent;
  let fixture: ComponentFixture<HealthTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
