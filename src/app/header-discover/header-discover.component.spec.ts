import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDiscoverComponent } from './header-discover.component';

describe('HeaderDiscoverComponent', () => {
  let component: HeaderDiscoverComponent;
  let fixture: ComponentFixture<HeaderDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDiscoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
