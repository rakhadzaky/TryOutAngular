import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintScoreComponent } from './print-score.component';

describe('PrintScoreComponent', () => {
  let component: PrintScoreComponent;
  let fixture: ComponentFixture<PrintScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
