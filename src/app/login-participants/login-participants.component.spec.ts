import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParticipantsComponent } from './login-participants.component';

describe('LoginParticipantsComponent', () => {
  let component: LoginParticipantsComponent;
  let fixture: ComponentFixture<LoginParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
