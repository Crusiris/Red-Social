import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWelcomeComponent } from './startwelcome.component';

describe('StartWelcomeComponent', () => {
  let component: StartWelcomeComponent;
  let fixture: ComponentFixture<StartWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
