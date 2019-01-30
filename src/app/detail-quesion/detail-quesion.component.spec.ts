import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQuesionComponent } from './detail-quesion.component';

describe('DetailQuesionComponent', () => {
  let component: DetailQuesionComponent;
  let fixture: ComponentFixture<DetailQuesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailQuesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailQuesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
