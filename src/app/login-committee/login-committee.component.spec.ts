import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCommitteeComponent } from './login-committee.component';

describe('LoginCommitteeComponent', () => {
  let component: LoginCommitteeComponent;
  let fixture: ComponentFixture<LoginCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
