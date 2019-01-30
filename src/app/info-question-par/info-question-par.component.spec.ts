import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoQuestionParComponent } from './info-question-par.component';

describe('InfoQuestionParComponent', () => {
  let component: InfoQuestionParComponent;
  let fixture: ComponentFixture<InfoQuestionParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoQuestionParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoQuestionParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
