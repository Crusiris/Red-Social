import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAvatarComponent } from './container-avatar.component';

describe('ContainerAvatarComponent', () => {
  let component: ContainerAvatarComponent;
  let fixture: ComponentFixture<ContainerAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
