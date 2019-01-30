import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerParComponent } from './answer-par.component';

describe('AnswerParComponent', () => {
  let component: AnswerParComponent;
  let fixture: ComponentFixture<AnswerParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
