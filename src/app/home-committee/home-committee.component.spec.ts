import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCommitteeComponent } from './home-committee.component';

describe('HomeCommitteeComponent', () => {
  let component: HomeCommitteeComponent;
  let fixture: ComponentFixture<HomeCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
