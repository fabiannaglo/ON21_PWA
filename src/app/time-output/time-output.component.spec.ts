import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOutputComponent } from './time-output.component';

describe('TimeOutputComponent', () => {
  let component: TimeOutputComponent;
  let fixture: ComponentFixture<TimeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
