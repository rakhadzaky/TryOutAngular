import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQuestionsComComponent } from './insert-questions-com.component';

describe('InsertQuestionsComComponent', () => {
  let component: InsertQuestionsComComponent;
  let fixture: ComponentFixture<InsertQuestionsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertQuestionsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQuestionsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
